let start = performance.now();
let output = 0;

for (let i = 1; i <= 1024 * 1024; i++) {
  output += Math.random();
}

let end = performance.now();

console.log(end - start); // 10.334708001464605 ms