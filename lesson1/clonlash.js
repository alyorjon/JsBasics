"use strict";
// let  x=10;
// let y=x;

// y+=5;
// console.log(y);
// console.log(x);

// let isMarried=false;
// let isarray = true;

// console.log(isMarried);
// console.log(isarray);

// const newnum={
//     x:1,y:5,};
// const newnum2=newnum //nusxasini berish kerak xoloss

// newnum2.x=7

// console.log(newnum);
// console.log(newnum2);
// // { x: 7, y: 5 }
// // { x: 7, y: 5 }

// const copyobj=(obj)=>{
//     let copynum={};
//     for (let i in obj){
//         copynum[i]=obj[i]
//     };
//     return copynum 
// }


// const newnum3 = copyobj(newnum);
// newnum3.x=8
// console.log(newnum3);
// console.log(newnum);


// const numbers={
//     x:10,y:5,z:{a:1,b:3}
// }
// //  obj nusxa olish
// const newnum1=Object.assign({},numbers);
// newnum1.a=5;
// console.log(newnum1);
// console.log(numbers );
// // ikkita obj burlashtirish
// const addnumber={
//     a:7,};
// const allnum=Object.assign(numbers,addnumber)// birinchisi ga ikkinchi obj qoshadi. Bosh bolsa nusxa oladi.
// console.log(allnum)
// // { x: 10, y: 5, z: { a: 1, b: 3 }, a: 7 }


const arr1=[1,2,3,4];
const newarr=arr1.slice()// arrayni nusxasini kochirib beradi
newarr.push(5);
console.log(newarr);
console.log(arr1);
// spread operatori
const players =['Salah','Mane'];
const club=['MU',"Liverpool"]
const mixplayer=[...players,...club] // ikkita arrayni qoshib beradi. array birlashmasi ... bilan qilinadi
console.log(mixplayer)