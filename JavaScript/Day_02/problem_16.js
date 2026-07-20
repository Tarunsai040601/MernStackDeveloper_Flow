// Print a 5×5 star pattern (nested loops)
let n = 5;
for (let i = 1; i < n; i++) {
  let data = "";
  for (let j = 1; j < n; j++) {
    data += "* ";
  }
  console.log(data);
}
