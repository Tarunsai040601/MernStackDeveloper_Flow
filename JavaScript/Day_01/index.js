// Objective:
// Write a JavaScript program that simulates adding items to a shopping cart, calculates
// total cost with tax, applies discount using operators, and displays the result using
// proper variable types and scope.

// TASK:- Shopping Card
let ShoppingCard = []; //to store the card data

let discount = 30; // taking discount on cost
let tax = 0.1; //tax
let card_01 = {
  ProductName: "Apple",
  "Quantity ": 1,
  Cost: 120,
};
let card_02 = {
  ProductName: "Bananna",
  "Quantity ": 0.5,
  Cost: 30,
};
let card_03 = {
  ProductName: "Mango",
  "Quantity ": 0.5,
  Cost: 90,
};

// add to shoppingCar
ShoppingCard.push(card_01, card_02, card_03);

// display the output
let data = ShoppingCard;
let total = 0;
// console.log("data:",data)
for (let i = 0; i < data.length; i++) {
  //   console.log("Cost:", data[i].Cost);
  let itemCost = data[i].Cost * data[i]["Quantity "];
  //   console.log("itemCost:", itemCost);
  total += itemCost;
}
console.log("the total pay after applying discount:", total * tax - discount);
