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

⸻

Features:

 * Enumerates PIN ranges from 000000 to 999999
 * Simple terminal interface
 * Custom target input
 * Adjustable PIN parameters
 * Open source and forkable

⸻

Usage:

 - Run the script with the desired port ranges:

     > node PINBrute.js 000000 999999

 - After running the script, you will be prompted to enter a target.

     > Target Example: http://127.0.0.1:5000/api/auth

⸻

SETUP:

1. Make sure Node.js is installed on your system
    You can check by running:
     > node -v
2. Install dependencies inside the project folder:
     > npm init -y
     > npm install express
3. Start the local web server (Terminal 1):
    > node PINWebServer.js
4. Open your browser and go to:
    > http://127.0.0.1:5000
5. Start the brute force script (Terminal 2):
    > node PINBrute.js 000000 999999
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

 - Do not use this software on systems you do not own or have explicit permission to test.

 - The author is not responsible for misuse of this software.

⸻

Contributing:

 - Feel free to fork this repository and improve upon it.

 - Credit is appreciated if you build upon this project.

⸻

Author:

 - Developed by: “ozrvv” on github
