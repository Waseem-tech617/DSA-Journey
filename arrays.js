// Q1.Getting elements in arrays through prompt.
let arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
    arr[i] = prompt("ener a vlaue");
}
console.log(arr);

// Q2.Find 2nd min number.
let arr = [56, 56, 34, 4, 27, 444, 444, 444, 444, 3, 55];
let fisrtmin = Math.min(arr[0], arr[1]);
let secondmin = Math.max(arr[0], arr[1]);
for (let i = 2; i < arr.length; i++) {
    if (arr[i] < fisrtmin) {
        secondmin = fisrtmin;
        fisrtmin = arr[i];
    } else if (arr[i] < secondmin && fisrtmin != arr[i]) {
        secondmin = arr[i];
    }

}
console.log(secondmin);

//  Q3.Reverse of array.
let arr = [1, 2, 3, 4, 5];
let temp = [];
for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
}
console.log(temp);

//  Q4.Reverse of array without space.
let arr = [1, 2, 3, 4, 5];
let i = 0, j = arr.length - 1;
while (i != j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr);

// Q5.Move the negitive elements to left side of array .
let arr = [1, 0, 1, 0, -1, -1, -1, 0];
let i = 0, j = 0;
while (i < arr.length) {
    if (arr[i] < 0) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        j++;
    }
    i++;
}
console.log(arr);

// Q6.left rotation by element by 2.
let arr = [1, 2, 3, 4, 5];
let copy = arr[0];
let copy2 = arr[1];
for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 2];
}
arr[arr.length - 2] = copy;
arr[arr.length - 1] = copy2;

console.log(arr);


// Q7.Right rotation by element by 1.
let arr = [1, 2, 3, 4, 5, 6];
let copy = arr[arr.length - 1];
for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = copy;
console.log(arr);



// Q8.left rotation by element by 1.
let arr = [1, 2, 3, 4, 5];
let copy = arr[0];
for (let i = 0; i <= arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length - 2] = copy;
console.log(arr);



// // Q9.left rotation by element by k element.
let arr = [1, 2, 3, 4, 5];
let k = prompt("enter a k value");
k = k % arr.length;
for (let i = 1; i <= k; i++) {
    let copy = arr[0];
    for (let j = 0; j <= arr.length - 1; j++) {
        arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = copy;
}
console.log(arr);





