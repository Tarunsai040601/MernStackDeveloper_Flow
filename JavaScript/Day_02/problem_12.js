// Prime numbers
let prime_num = [];
for (let i = 2; i <= 50; i++) {
  let is_prime = true;
  console.log(i);
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      is_prime = false;
      break;
    }
  }
  if (is_prime) {
    prime_num.push(i);
  }
}
console.log(prime_num);
