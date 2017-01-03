// sample from https://code.visualstudio.com/Docs/runtimes/nodejs
console.log("Simple console application");
console.log("--------------------------");

var msg = "Hello World";
console.log(msg);

var lngth = msg.length;
console.log("length of the message is: " + lngth);
console.log("--------------------------");
console.log("Press Ctr+C to exit ...");
console.log("or press Ctr+q to exit ...");

/*
// 1.
// toto by malo cakat na stlacenie klavesu - ale nefunguje to 
// instalovane ako npm install paktc
// odinstalacia npm uninstall paktc
//require("paktc");
*/

/*
 2.
 try to wait user keyboard input after application finishes
 http://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin
 ctrl+C exit and close the application
*/
/*
var stdin = process.stdin;

// without this, we would only get streams once enter is pressed

stdin.setRawMode(true);

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)

stdin.resume();

// i don't want binary, do you?
stdin.setEncoding('utf8');

// on any data into stdin
stdin.on('data', function (key) {
  // ctrl-c ( end of text )
  if (key === '\u0003') {
    console.log("Ctr+C pressed ...");
    process.exit();
  }
  // write the key to stdout all normal like
  process.stdout.write(key);
});
*/

/*
3.
using keypress
*/

var keypress = require('keypress')
keypress(process.stdin)

if (process.stdin.setRawMode)
  process.stdin.setRawMode(true)
else
  require('tty').setRawMode(true)

process.stdin.on('keypress', function (c, key) {
  console.log('there was pressed c:', c, ',key', key)
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause()
  }
  if (key && key.ctrl && key.name == 'q') {
    process.stdin.pause()
  }
  if (key && key.name == 'escape') {
    console.log('Escape do not exit the application!')
  }

  console.log("--------------------------");
  console.log("Press Ctr+C to exit ...");
  console.log("or press Ctr+q to exit ...");
})

process.stdin.on('mousepress', function (mouse) {
  console.log(mouse)
})

/*
keypress.enableMouse(process.stdout)
process.on('exit', function () {
  //disable mouse on exit, so that the state is back to normal
  //for the terminal.
  keypress.disableMouse(process.stdout)
})

process.stdin.resume()
*/

