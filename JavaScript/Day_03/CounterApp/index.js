let increment = document.getElementsByClassName("Btn_01")[0];
let reset = document.getElementsByClassName("Btn_02")[0];
let decrement = document.getElementsByClassName("Btn_03")[0];
let cont_btn = document.getElementById("count");
let count = 0;
increment.addEventListener("click", () => {
  console.log(count);
  count++;
  cont_btn.textContent = "Count:" + count;
});
decrement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    cont_btn.textContent = "Count:" + count;
  }
});
reset.addEventListener("click", () => {
  count = 0;
  cont_btn.textContent = "Count:" + count;
});
