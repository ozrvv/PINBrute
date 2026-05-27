/*
░█████████  ░██████░███    ░██ ░████████                          ░██               
░██     ░██   ░██  ░████   ░██ ░██    ░██                         ░██               
░██     ░██   ░██  ░██░██  ░██ ░██    ░██  ░██░████ ░██    ░██ ░████████  ░███████  
░█████████    ░██  ░██ ░██ ░██ ░████████   ░███     ░██    ░██    ░██    ░██    ░██ 
░██           ░██  ░██  ░██░██ ░██     ░██ ░██      ░██    ░██    ░██    ░█████████ 
░██           ░██  ░██   ░████ ░██     ░██ ░██      ░██   ░███    ░██    ░██        
░██         ░██████░██    ░███ ░█████████  ░██       ░█████░██     ░████  ░███████  
*/

// PINWebServer.js - This script is the addon to PINBrute.js, it hosts a webserver on the local ip+port "http://127.0.0.1:5000"
// Developed by: ozrvv on github, This script is for educational purposes only.

// Feel free to fork this project and improve it.
// Credit is appreciated if you build upon this project.

/* Setup: 
 - Make sure you have Node.js and express installed
 - Run the command "node PINWebServer.js"
 - Open "http://127.0.0.1:5000" in your browser
 - You are now ready to start brute forcing!
 */
 
// CHECKOUT THE README FILE FOR ADDITIONAL INFORMATION AND PROPER SETUP!

import express from "express";

const app = express();
const CORRECT_PIN = "123456";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>PIN Entry</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            text-align: center;
        }
        input {
            font-size: 24px;
            padding: 10px;
            width: 200px;
            text-align: center;
            letter-spacing: 10px;
        }
        button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 18px;
        }
        .error {
            color: red;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="box">
        <h2>Enter 6‑Digit PIN</h2>
        <form method="POST" action="/check">
            <input type="password" name="pin" maxlength="6" pattern="\\d{6}" required>
            <br>
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
  `);
});

app.post("/check", (req, res) => {
  const pin = req.body.pin || "";
  if (pin === CORRECT_PIN) {
    res.send(`
      <h1>Yay, you got the pin.. Did you check the code or did you brute force it..?</h1>
      <p>Welcome!</p>
    `);
  } else {
    res.send(`
      <h1>NAHH WRONG PIN</h1>
      <p><a href="/">TRY AGAIN LOL</a></p>
    `);
  }
});

app.post("/api/auth", (req, res) => {
  const pin = req.body.pin || "";
  if (pin === CORRECT_PIN) {
    res.json({ ok: true });
  } else {
    res.status(401).json({ ok: false });
  }
});

app.listen(5000, () => {
  console.log("Server running at http://127.0.0.1:5000");
});
