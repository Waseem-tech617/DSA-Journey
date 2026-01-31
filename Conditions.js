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

