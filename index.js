let a=[1,2,3,4,4,5,6,7,8,9,10];
let b=a.filter((item,index)=>{
    return a.indexOf(item)===index;
    console.log(a.indexOf(item));
    console.log(index);
})

console.log(b);

let arr=[1,2,3,4,5,6,7,8,9,10];
let arr1=arr.map((item,index)=>{
    return item*2;
})
console.log(arr1);

let arr2=arr.reduce((pre,cur)=>{
    return pre+cur;
},0)
console.log(arr2);

let arr3=arr.some((item,index)=>{
    return item>5;
})
console.log(arr3);
let tmp=new Set(a);
console.log(tmp);
let c=Array.from(tmp);
console.log(c);

