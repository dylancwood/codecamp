Setup Instructions
====

This is how to install and set up your computer for programming using Node.js

# Node.js
[Demo video](https://www.youtube.com/watch?v=GpRRtF3OKWs&list=PLnPkMlQGVnlLf8Luf6UJq29w4TB8Jfyxm)
1. Go to [http://nodejs.org](http://nodejs.org)
2. Click the green button to download the latest LTS version (6.11.1)
3. When prompted, click 'Run'
4. Follow instructions to complete installation.

# Visual Studio Code
1. Go to [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
2. Click the button to download for Windows
3. When prompted, click 'Run'
4. Follow instructions to complete installation.

## Code Runner for VS Code
1. Open Visual Studio Code by clicking the Windows icon at the bottom left and typing `code`. Click on `Visual Studio Code`
2. Hold down the Control (`Ctrl`) key and press the `P` key, then release both keys.
3. Type `ext install` and press `enter`
4. Search for `code runner`
5. Install Code Runner and then click the button to `Reload`.

## Open your folder in VS Code
1. Open Visual Studio Code by clicking the Windows icon at the bottom left and typing `code`. Click on `Visual Studio Code`
2. Click `File` -> `Open Folder` (not `Open File`)

# Javascripting workshop
## Install
1. Open Visual Studio Code by clicking the Windows icon at the bottom left and typing `code`. Click on `Visual Studio Code`
2. Click `View` -> `Integrated Terminal`
3. In the terminal, type `npm install -g javascripting` and press enter

## Run
1. In the terminal, type `javascripting` and press enter

## Code
1. Write your code in a file and save it.

## Verify
1. In the terminal, type the command `javascripting verify introduction.js` and press enter.
2. You may need to scroll up to see whether you were successful or not.

# Nodebots workshop
## References
* Johnny Five examples. These can be useful to learn more about the Johnny Five functions that are available to you. [http://johnny-five.io/examples/](http://johnny-five.io/examples/)

## Install Workshop Program
1. Open Visual Studio Code by clicking the Windows icon at the bottom left and typing `code`. Click on `Visual Studio Code`
2. Click `View` -> `Integrated Terminal`
3. In the terminal, type `npm install -g nodebot-workshop` and press enter

## Install Johnny Five
1. Open your folder in Visual Studio Code
2. In terminal, type `npm install johnny-five` and press enter

## Run
1. In the terminal, type `nodebot-workshop` and press enter

## Code
1. Write your code in a file and save it.

## Verify
1. In the terminal, type the command `nodebot-workshop verify blink-blink.js` and press enter.
2. You may need to scroll up to see whether you were successful or not.



# Blink Blink Code
```javascript
const five = require('johnny-five')
const board = new five.Board({ port: 'COM4' })
board.on('ready', function () {

  var led = new five.Led({
      pin: 13
  })

  led.blink(1000)

})
```
