// // Q1.check valid voter.

let age=Number(prompt("Enter your age"));

if(isNaN(age))   {
    console.log("wrong input");   
}else if(age>=18){
console.log("valid voter");

}else{
 console.log("invalid voter")
}

// Q2.Shope discount.
let aitemprice=Number(prompt("enter price of item"));
let discount=0;
if(aitemprice>=0 && aitemprice<=5000){
    discount=0;
}  else if(aitemprice>5000 && aitemprice<=6000){
    discount=10;
}else if(aitemprice>6000 && aitemprice<=7000){
    discount=20;
}else if(aitemprice>7000){
    discount=30;
}else{
    console.log("wrong value");
}
console.log(Math.floor(aitemprice-( aitemprice/100*discount)));

// Q3.calculate electricity bill.

let units=Number(prompt("enter price of item"));
let amount=0;
if(units>400){
    amount=(units-400)*16;
    units=400;
}
if(units>200 &&units<=400){
    amount+=(units-200)*12;//2400+800+400
    units=200;
}
if(units>100 &&units<=200){
    amount+=(units-100)*8;
    units=100;
}
amount+=units*4;
console.log(amount);

// Q.4 PKR Dinomination.
let amount=Number(prompt("Enter Amount "));
if(amount>=1000){
    console.log(Math.floor(amount/500));
    amount=amount%500;
}if(amount>=500){
    console.log(amount/100);
    amount=amount%100;
}
if(amount>=100){
    console.log(amount/50);
    amount=amount%50;
}
if(amount>=50){
    console.log(amount/5);
    amount=amount%5;
}
if(amount>=5){
    console.log(amount/2);
    amount=amount%2;
}


 












