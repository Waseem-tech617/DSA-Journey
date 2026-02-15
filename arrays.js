// Q1.Getting elements in arrays through prompt.
let arr=new Array(5);
for(let i=0;i<arr.length;i++){
 arr[i]=prompt("ener a vlaue");
}
console.log(arr);

// Q2.Find 2nd min number.
let arr = [56,56, 34, 4, 27, 444,444,444,444, 3,55];
let fisrtmin = Math.min(arr[0],arr[1]);
let secondmin = Math.max(arr[0],arr[1]);
for (let i = 2; i < arr.length; i++) {
    if (arr[i] < fisrtmin) {
        secondmin=fisrtmin;
        fisrtmin= arr[i];
    }else if(arr[i]<secondmin && fisrtmin!=arr[i]){
        secondmin=arr[i];
    }
     
}
console.log(secondmin); 
