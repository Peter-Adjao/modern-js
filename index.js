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


console.log(typeof NaN);


console.log(Boolean(NaN));


console.log(Boolean(0));


const products = [];

if (products.length === 0) {
  console.log("Products Exists");
}

console.log(parseInt("25px"));


console.log(Number("100"));
console.log(Number("10.5"));
console.log(Number("hello"));
console.log(Number(""));
console.log(Number(true));
console.log(Number(false));


console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));


const productPrice = Number("150");
const quantity = Number("3");

const total= productPrice * quantity;

console.log(total);
console.log(typeof total);

if (total.isNaN) {
  console.log( "Input is valid" ? "Input number is invalid");
}
