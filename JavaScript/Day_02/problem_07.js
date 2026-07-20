// Print even numbers
let even = [];
let odd = [];
for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    even.push(i);
  } else if (i % 2 != 0) {
    odd.push(i);
  }
}
console.log("even:", even);
console.log("odd:", odd);
