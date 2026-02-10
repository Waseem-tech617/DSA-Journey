// // // Q1.sum of n natural numbers.
// // let prime=prompt("enter a natural number");
// // if(prime===null){
// //     console.log("canceled");
// // }
// // else{ 
// //     let n=Number(prime);
// //     if(isNaN(prime)){
// //     console.log("invalid number")
// // }else if(prime<0){
// //     console.log("it is negitive number not natural number")
// // }
// // else{
// //     sum=0;
// //     for(let i=0;i<=prime;i++){
// //         sum+=i;
// //     }
// //     console.log(sum);
// // }
// // }

// // //  Q2.factors of numbers with best method reduce time and memory.
// // let factors=Number(prompt("Enter a num"));
// // for(let i=0;i<=Math.floor(factors/2);i++){
// //     if(factors%i===0){
// //         console.log(i);
// //     }
// // }
// //   console.log(factors);

// // //   Q3. Checking Prime Number DSA stile.
// // function isPrime(n){
// //     if(n===1)  return false;
// //     if(n===2) return true;
// //     if(n%2===0) return false;
// //     for(let i=3;i<=Math.sqrt(n);i+=2){
// //         if(n%i===0) return false;
// //     }
// //    return true;
// // }
// // console.log(isPrime(1));

// // // Q4.Sum of digit use while loop.
// // let sum=prompt("enter a num");
// // if(sum===null){
// // console.log("canceled");
// // } else{
// // let n=Number(sum);
// // if(isNaN(n)){
// //     console.log("invalid number");
// // }else{
// //     if(n>0){
// //     let su=0;
// //     while(n>0){
// //      var rem=n%10;
// //       su+=rem;
// //       n=Math.floor(n/10);
// //     }
// //     console.log(`sum of digits is = ${su} `);
// // }
// //     }
// // }


// // // Q5.Validation check.

// // let password=prompt("Enter a Password insure must these points At least 8 charcters ,use symbol or number ");
// // if(password===null){
// //     console.log("canceled");
// // }else{
// //     if(password.length>10){
// //         console.log("invalid");
// //     }else{
// //         let hassymbol=false;
// //         let hasnumber=false;
// //         let hasUppercase=false;  
// //         let hasLowercase=false; 
// //      for(let i=0;i<password.length;i++){
// //             if("!@#$%".includes(password[i])){
// //                 hassymbol=true;
// //             }
// //                 if(password[i]>="0" && password[i] <="9"){
// //                 hasnumber=true;
// //             }
// //                 if(password[i]>="A" && password[i]<="Z"){
// //                 hasUppercase=true;
// //             }
// //                if(password[i]>="a" && password[i]<="z"){
// //                 hasLowercase=true;
// //             }
// //                if(hasnumber && hassymbol && hasUppercase && hasLowercase){
// //                 break;
// //             }
           
// //             }
// //              if(hasnumber && hassymbol && hasUppercase && hasLowercase){
// //             console.log(password);
// //             }else{
// //              console.log("invalid");
// //         }
// //     }
// // }


// // // ✅ Question 6:
// // // User se ek number lo.
// // // Jab tak number positive ho, uska square print karo.
// // // Agar user negative de de → program stop.

// // let user=Number(prompt("enter a num"));
// // while(user>0){
// //  let square=0;
// //   square=user*user;
// //   console.log(square);
// // //  user=Number(prompt("enter a num"));
// // }
// // console.log("program eneded");

// // // ✅ Question 7
// // // User se password baar baar lo.
// // // Jab tak user "admin123" sahi enter na kare, dubara poochte raho.
// // // Sahi hote hi → "Login successful" print karo.
// //  let password=prompt("write passsword");
// //  while(password!=="admin123"){
// //     console.log("Try again");
// //      password=prompt("write passsword");
// //  }
// //  console.log("success login");

// // // ✅ Question 8:reverse a number;
// // let n=1234;
// // let rev=0;
// // while(n>0){
// //     let rem=n%10;
// //     rev=rev*10+rem;
// //     n=Math.floor(n/10);
// // }
// //    console.log(rev);


// // ✅ Question 9:strong number.
// let number=145;
// let copy=number;
// let sumfactorial=0;
// while(number>0){
//     let rem=number%10;
//     let fact=1;
//     for(let i=1;i<=rem;i++){
//          fact=fact*i;
//     }
//     sumfactorial+=fact;
//     number=Math.floor(number/10);
 
// }
//  if(copy===sumfactorial){
//         console.log("strong")
//     }else{
//         console.log("not Strong");
        
//     }



// // // ✅ Question 10:Guesing number.
// let gessnumber=Number(prompt("guess thre number"));
// do{
//     console.log("try again");
//     gessnumber=Number(prompt("guess thre number"));
// }while(gessnumber!==1234);
// console.log(gessnumber);




