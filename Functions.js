Q1.filter greater then 10.

let numbers = [5, 12, 8, 130, 44];
let filter=numbers.filter(greater=> greater>10);
console.log(filter);

// Q2.Har price par 10% tax add karke new array banao.
let prices = [100, 200, 300];
let tex=prices.map((p)=>{
     let percent=10*p/100;
     return p+percent;
});
console.log(tex);


// Q3.In sab numbers ka product nikalo using reduce().
// (Expected output: 24)
let numbers = [1, 2, 3, 4];
let product=numbers.reduce((acc,curr)=>{
    return acc*curr;
},1)
console.log(product);


// Question 4 – find() 👉 id = 2 wala user find karo.
let users = [
  {id: 1, name: "Ali"},
  {id: 2, name: "Ahmed"},
  {id: 3, name: "Sara"}
];
let find=users.find(val=> val.id===2);
console.log(find);


// 🧠 Question 5 – Chaining 🔥🔥
// let numbers = [1,2,3,4,5,6];

// 👉 Pehle even numbers filter karo,
// 👉 Phir unko double karo,
// 👉 Final result return karo.
let numbers = [1,2,3,4,5,6];
let even=numbers.filter(val => val%2===0);
let doubel=even.map(val => val*2);
console.log(even);
console.log(doubel);

// Question 6:👉 Function showProduct me direct destructuring se title aur price print karvao.
let product = {id: 1, title: "Laptop", price: 50000};
function showProduct({id,title,price}){
    console.log(id,title);
    
}
showProduct(product);