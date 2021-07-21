// method #1
// using readline module
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  console.log('your input:', line);
});

// method #2
// using fs module
const input = require('fs').readFileSync('/dev/stdin').toString();
console.log('your input:', input);
