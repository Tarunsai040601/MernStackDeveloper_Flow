let button_01 = document.getElementById("btn_1");
let button_02 = document.getElementById("btn_2");
button_01.addEventListener("click", () => {
  let stotedData = JSON.parse(localStorage.getItem("userDetails:")) || [];
  let name = prompt("Enter user Name:");
  let email = prompt("Enter user email");
  userData = {
    name: name,
    email: email,
  };
  stotedData.push(userData);
  let dataStore = localStorage.setItem(
    "userDetails:",
    JSON.stringify(stotedData),
    alert("user add sucessfully...!")
  );
});
button_02.addEventListener("click", () => {
  let displayData = localStorage.getItem("userDetails:");
  alert("list of user")
  console.log("displayData:", displayData);
});
let button_03 = document.getElementById("btn_3");
button_03.addEventListener("click", () => {
  let data = localStorage.clear("userDetails:");
  alert("cleared all userData")
  console.log("data:", data);
});
