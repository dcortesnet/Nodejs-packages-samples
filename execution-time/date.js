let start = new Date().getTime();
let output = 0;

for (let i = 0; i < 1024 * 1024; i++) {
  output = Math.random();
}

let end = new Date().getTime();

// Calculate the diff
console.log(end - start); // ms


