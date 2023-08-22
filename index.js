/*5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
 

Tugas kamu adalah:

Write a program to use for loop to print the following reverse number pattern */

let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    pattern += n - j - i + 2 + " ";
  }
  pattern += "\n";
}

console.log(pattern);
