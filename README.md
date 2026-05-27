```text
░█████████  ░██████░███    ░██ ░████████                          ░██               
░██     ░██   ░██  ░████   ░██ ░██    ░██                         ░██               
░██     ░██   ░██  ░██░██  ░██ ░██    ░██  ░██░████ ░██    ░██ ░████████  ░███████  
░█████████    ░██  ░██ ░██ ░██ ░████████   ░███     ░██    ░██    ░██    ░██    ░██ 
░██           ░██  ░██  ░██░██ ░██     ░██ ░██      ░██    ░██    ░██    ░█████████ 
░██           ░██  ░██   ░████ ░██     ░██ ░██      ░██   ░███    ░██    ░██        
░██         ░██████░██    ░███ ░█████████  ░██       ░█████░██     ░████  ░███████  
```                                                                            
PINBrute is a simple PIN enumeration tool designed for educational and authorized testing.

Requirements:

 * Node.js v18 or newer recommended
 * npm included with Node.js

⸻

Features:

 * Enumerates PIN ranges from 000000 to 999999
 * Simple terminal interface
 * Custom target input
 * Adjustable PIN parameters
 * Open source and forkable

⸻

Usage:

 - Run the script with the desired PIN ranges:

     > node PINBrute.js 000000 999999

 - After running the script, you will be prompted to enter a target.

     > Target Example: http://127.0.0.1:5000/api/auth

⸻

SETUP:

1. Make sure Node.js is installed on your system
    You can check by running:
     > node -v
2. Install dependencies inside the project folder:
     > npm install
3. Start the local web server (Terminal 1):
    > node PINWebServer.js
4. Open your browser and go to:
    > http://127.0.0.1:5000
5. Start the brute force script (Terminal 2):
    node PINBrute.js 000000 999999
6. When prompted, enter your target URL:
    > http://127.0.0.1:5000/api/auth

⸻

Notes:

* PIN brute forcing can take a significant amount of time.
* Runtime depends on:
    * PIN length
    * Rate limiting
    * Network speed
    * Target response time

⸻

Disclaimer:

 - This project is intended for educational purposes and authorized security testing only.

 - Do not use this software against systems, services, or networks that you do not own or have explicit permission to test.

 - The author assumes no responsibility for misuse, damage, or illegal use of this software.

⸻

Contributing:

 - Feel free to fork this repository and improve upon it.

 - Credit is appreciated if you build upon this project.

⸻

License:

 - This project is licensed under the GNU GPLv3 License.

 - You are free to use, modify, and distribute this software under the terms of the license.

 - Any modified or redistributed versions of this project must also remain open source and include proper attribution.

 - See the LICENSE file for additional information.

⸻

Author:

 - Developed by: “ozrvv” on github
