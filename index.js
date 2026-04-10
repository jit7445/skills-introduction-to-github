let a=[1,2,3,4,4,5,6,7,8,9,10];
let b=a.filter((item,index)=>{
    return a.indexOf(item)===index;
})
console.log(b);