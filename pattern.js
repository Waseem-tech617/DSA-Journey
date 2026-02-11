let prompt=require('prompt-sync')();
let n=prompt("enter a number");

// Q1.Right Pattern;
for(let i=1;i<=n;i++){
 for(let j=1;j<=i;j++){
        process.stdout.write("*");  
 }
 console.log();
}



