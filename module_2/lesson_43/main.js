'use strict';


const now=new Date();
// Fulyear
console.log(now.getFullYear())
console.log(now.getDay())
console.log(now.getSeconds())
console.log(now.getMinutes())
console.log(now.getHours())
console.log(now.getMonth())
console.log(now.getDate())



console.log(now.setHours(12))
console.log(now)

// const now1=new Date(0);
// // Fulyear
// console.log(now1.getFullYear())
// console.log(now1.getDay())
// console.log(now1.getSeconds())
// console.log(now1.getMinutes())
// console.log(now1.getHours())

let start=new Date()
for (let i =0;i<10000;i++){
    let some=i**3;
    console.log(some)
}
let end=new Date()
console.log(end-start)
alert(end-start)