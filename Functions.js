// // Q1.filter greater then 10.

// let numbers = [5, 12, 8, 130, 44];
// let filter=numbers.filter(greater=> greater>10);
// console.log(filter);

// // Q2.Har price par 10% tax add karke new array banao.
// let prices = [100, 200, 300];
// let tex=prices.map((p)=>{
//      let percent=10*p/100;
//      return p+percent;
// });
// console.log(tex);


// // Q3.In sab numbers ka product nikalo using reduce().
// // (Expected output: 24)
// let numbers = [1, 2, 3, 4];
// let product=numbers.reduce((acc,curr)=>{
//     return acc*curr;
// },1)
// console.log(product);


// // Question 4 – find() 👉 id = 2 wala user find karo.
// let users = [
//   {id: 1, name: "Ali"},
//   {id: 2, name: "Ahmed"},
//   {id: 3, name: "Sara"}
// ];
// let find=users.find(val=> val.id===2);
// console.log(find);


// // 🧠 Question 5 – Chaining 🔥🔥
// // let numbers = [1,2,3,4,5,6];

// // 👉 Pehle even numbers filter karo,
// // 👉 Phir unko double karo,
// // 👉 Final result return karo.
// let numbers = [1,2,3,4,5,6];
// let even=numbers.filter(val => val%2===0);
// let doubel=even.map(val => val*2);
// console.log(even);
// console.log(doubel);

// // Question 6:👉 Function showProduct me direct destructuring se title aur price print karvao.
// let product = {id: 1, title: "Laptop", price: 50000};
// function showProduct({id,title,price}){
//     console.log(id,title);

// }
// showProduct(product);



// // Q7. Function Declaration .Create a function greetUser that takes a name as parameter and returns "Hello, <name>!".

// function greetuser(name) {
//     return `Hello ${name}`;
// }

//  // Q8. Function Expression .Write a function expression called square that returns the square of a number.

// let square = function (number) {
//     return number * number;
// }

// // Q9. Arrow Function .Convert the following into an arrow function:

// let multiply = (a, b) => a * b;


// // Q10. Default Parameter.Write a function sayHi that prints "Hi, Guest!" if no name is provided, otherwise prints "Hi, <name>!".
// function sayhi(name="Guest!"){
// console.log( `Hi,${name}`);
// }


//  // Q11. Function in Object. Create an object calculator with methods add and subtract that take two numbers and return the result.

// const calculator = {
//   add: function(a,b) {
//     return a + b;
//   },
//   subtract:function(a,b) {
//     return a - b;
//   }
// };
// console.log(calculator.add(1,2));//3



//  // Q12. Using Array with Function. Given numbers = [1, 2, 3, 4], create a new array doubled where each number is multiplied by 2 using map and an arrow function.
// let numbers = [1, 2, 3, 4];
// let double=numbers.map(val => val*2);
// console.log(double);

