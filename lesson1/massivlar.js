'use strict';


// let new_array=[];
// new_array[1]=123
// console.log(new_array)

const arr=[1,2,3,4,5,6]

arr.forEach(function(item,index,arr){
    console.log(index);
    console.log(item);
    console.log(arr);
})
let ar=arr.sort((a,b)=>a-b)
console.log(ar)
console.log(arr.length)// kengligi
// 6
arr.pop();
console.log(arr);// kengligi
// 1,2,3,4,5
arr.push(7);// exiriga qoshadi
console.log(arr);

// shift boshidan olib tashedi
arr.shift();
console.log(arr);
// 2,3,4,5,7

// unshift boshidan olib tashedi
arr.unshift(0);
console.log(arr);
// 2,3,4,5,7


// sikl qilish
for (let i =0;i<arr.length;i++){
    console.log(arr[i]);
}

// for in bilan dict itiratsiya qilamiza
// for of bilan list itiratsiya qilaman

for (let i of arr){
    console.log(i);
}
// length oxirgi elementga birni qoshadi

//  foreach() birinchi qiymati qiymat,2 index,3 royxat 
arr.forEach(function(items,index,arr){
    // console.log(items);
    // console.logg(index);
    console.log(arr);
    console.log(`${index} : ${index} in ${arr}`)
})




// example
let movie=prompt("What's your favourite movies")
let arr3  = movie.split(',')
for (let i of arr3){
    console.log(i)
}
console.log(arr3.join('asd'))