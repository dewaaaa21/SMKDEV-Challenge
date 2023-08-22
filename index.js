/*5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
 

Tugas kamu adalah:

Write a program to use for loop to print the following reverse number pattern */

for (let i = 5; i >= 1; i--) {
  let pattern = "";
  for (let j = i; j >= 1; j--) {
    pattern += j + " ";
  }
  console.log(pattern);
}
