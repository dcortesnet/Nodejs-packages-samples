console.time('startTiming');
let output = 0;

for (let i = 1; i <= 1024 * 1024; i++) {
  output += Math.random();
}

console.timeEnd('startTiming'); // startTiming: 10.548ms