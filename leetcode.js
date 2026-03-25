// QUESTION NO:1 Merge two sorted arrays.
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
let m=3;
let n=3;
let i= m-1;
let j= n-1;
let k=m+n-1;
while(j>=0){
if(nums1[i]>nums2[j]){
    nums1[k]=nums1[i];
    i--;
}else{
   nums1[k]=nums2[j];
   j--;
}
 k--;
}
console.log(nums1);

