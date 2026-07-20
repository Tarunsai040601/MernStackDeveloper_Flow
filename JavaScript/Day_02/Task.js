function GuessNumber(num) {
  console.log("number u to 1-10 range");
  let code = 7;
  if (num < code) {
    console.log("Too low");
  } else if (num > code) {
    console.log("To high");
  } else {
    console.log("Correct");
  }
}
GuessNumber(1);
