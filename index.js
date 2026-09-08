// let carCount = 0;
// carCount += 1;
// console.log(carCount);
//
//
// const firstName = "Alex";
// const message = `Hello, ${firstName}!`;
//
// console.log(message);
//
//   const age = 25;
//
//   console.log(typeof age);
//
// const user = {
//   name: "Alex",
//   age: 25,
//   email: "example@gmail.com",
// };
//
// console.log(user.email);
//
// console.log(typeof "Alex");


// console.log(typeof NaN);
//
//
// console.log(Boolean(NaN));
//
//
// console.log(Boolean(0));
//
//
// const products = [];
//
// if (products.length === 0) {
//   console.log("Products Exists");
// }
//
// console.log(parseInt("25px"));
//
//
// console.log(Number("100"));
// console.log(Number("10.5"));
// console.log(Number("hello"));
// console.log(Number(""));
// console.log(Number(true));
// console.log(Number(false));
//
//
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(""));
// console.log(Boolean("hello"));
// console.log(Boolean("false"));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean([]));
// console.log(Boolean({}));
//
//
// const productPrice = Number("150");
// const quantity = Number("3");
//
//
// if (Number.isNaN(productPrice) || Number.isNaN(quantity)) {
//   console.log("Input is invalid");
// } else {
//   const total = productPrice * quantity;
//
//
// console.log(total);
// console.log(typeof total);
// }



// function example() {
//
//   console.log(name);
//
//   var name = "Peter";
// }
// example();
//
// console.log(typeof name);



//Loops
// for(let i = 0; i <= 10; i++) {
//   console.log(i);
// }


// const products =[
//     "Monstera",
//     "Ficus",
//     "Aleo Vera",
//     "Hibiscus",
//     "Sunflower",
//     "Rose",
//     "Catalya"
// ];
//
// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

//write a for loop that prints :

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
//
// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }
//
//
// //Calculate the total
// const prices = [100, 200, 150, 300];
//
// let total = 0;
//
// for (let i = 0; i < prices.length; i++) {
//   total += prices[i];
// }
//
// console.log(total);
// //

//Find how many products cost more than 100
// const products = [
//   { name: "Snake Plant", price: 150, category: "Outdoor"},
//   { name: "Aloe Vera", price: 80, category: "Succulent"},
//   { name: "Monstera", price: 250, category: "Classic"},
//   { name: "Peace Lily", price: 120, category: "Indoor"}
// ];
//
//  let product = 0;
//
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 100){
//     product++;
//   }
// }
//
// console.log(product);

//Forward and backkward iteration

// const products = [
//   { name: "Snake Plant", price: 150, category: "Outdoor"},
//   { name: "Aloe Vera", price: 80, category: "Succulent"},
//   { name: "Monstera", price: 250, category: "Classic"},
//   { name: "Peace Lily", price: 120, category: "Indoor"}
// ];
//
// for ( let i = 0; i < products.length; i++) {
//   console.log(products[i].name);
//   console.log(products[i].price);
//   console.log(products[i].category);
// }


//Backward iteration


const products = [
  { name: "Snake Plant", price: 150, category: "Outdoor"},
  { name: "Aloe Vera", price: 80, category: "Succulent"},
  { name: "Monstera", price: 250, category: "Classic"},
  { name: "Peace Lily", price: 120, category: "Indoor"}
];

for ( let i = products.length - 1; i >= 0; i--) {
  console.log(products[i].name);
  console.log(products[i].price);
  console.log(products[i].category);
}


// for (let i = 0, j = 10; i < 5; i++, j--) {
//   console.log(i, j);
// }


// calculate total price
const prices = [20, 50, 200,79, 90, 156]

let total = 0;

 for ( let i = 0; i < prices.length; i++) {
   total += prices[i];
 }

console.log(total);


//Print Everything
const fruits = ["Apple", "Banana", "Orange", "Manngo"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


//Calculate the cart total

// const cart = [
//   { name: "Snake Plant", price: 150, quantity: 2 },
//   { name: "Aloe Vera", price: 80, quantity: 3 },
//   { name: "Monstera", price: 250, quantity: 1 }
// ];
//
// let cartTotal = 0;
//
// for (let i = 0; i < cart.length; i++) {
//
//   cartTotal += (cart[i].price * cart[i].quantity);
// }
//
// console.log(cartTotal);



// While loop
// let count = 5;
//
// while (count >= 0) {
//   console.log(`Before update ${count}`);
//
//   count--;
//
//   console.log(`During update ${count}`);
// }
//
// console.log(`After update ${count}`);

//While loop reverse iteration

// let count = 10;
//
// while  (count >= 1) {
//   console.log(count);
//
//   count--;
// }


//Withdraw while there is enough balance

let balance = 1000;
let withdrawal = 200;

while (balance >= withdrawal) {
  console.log(balance);
  balance -= withdrawal;
}
console.log(balance);

// Retry Logic
let attempts = 0;
let success = false;

while (attempts < 3 && !success) {
  attempts++;

  success = attempts === 2;

console.log(`Attempt ${attempts}: success = ${success}`);
}


//Do while Loops

let count = 0;

do {
  console.log(count);
  count++;
} while (count <= 5);


//Reverse printing
let number = 5;

do {
  console.log(number);
  number--;
} while (number >= 0);


// Retry Logic with do while
let retries = 0;
let successful = false;

do {
  retries++;

  successful = retries === 2;

  console.log(`Retries ${retries}: successful = ${successful}`);

} while (retries < 3 && !successful);
