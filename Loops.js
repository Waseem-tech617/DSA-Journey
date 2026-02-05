// Q1.sum of n natural numbers.
let prime=prompt("enter a natural number");
if(prime===null){
    console.log("canceled");
}
else{ 
    let n=Number(prime);
    if(isNaN(prime)){
    console.log("invalid number")
}else if(prime<0){
    console.log("it is negitive number not natural number")
}
else{
    sum=0;
    for(let i=0;i<=prime;i++){
        sum+=i;
    }
    console.log(sum);
}
}

//  Q2.factors of numbers with best method reduce time and memory.
let factors=Number(prompt("Enter a num"));
for(let i=0;i<=Math.floor(factors/2);i++){
    if(factors%i===0){
        console.log(i);
    }
}
  console.log(factors);
