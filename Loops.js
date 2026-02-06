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

//   Q3. Checking Prime Number DSA stile.
function isPrime(n){
    if(n===1)  return false;
    if(n===2) return true;
    if(n%2===0) return false;
    for(let i=3;i<=Math.sqrt(n);i+=2){
        if(n%i===0) return false;
    }
   return true;
}
console.log(isPrime(1));

// Q4.Sum of digit use while loop.
let sum=prompt("enter a num");
if(sum===null){
console.log("canceled");
} else{
let n=Number(sum);
if(isNaN(n)){
    console.log("invalid number");
}else{
    if(n>0){
    let su=0;
    while(n>0){
     var rem=n%10;
      su+=rem;
      n=Math.floor(n/10);
    }
    console.log(`sum of digits is = ${su} `);

}
    }
}
