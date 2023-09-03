"use strict";
const user='Aisha';
console.log(user.split('i'));
// ['a'],['sha']
console.log(user.length);
// 5
console.log(user[0]);
// A
console.log(user.replace('i','o'));
// aosha
console.log(user.toUpperCase());
// AISHA
console.log(user.toLowerCase());
// aisha

const sayhello ="Hello Uzbekistan";
console.log(sayhello.indexOf('e'))
// o harfi 4 indexda turibdi
console.log(sayhello.slice(7,10))//indexdan kesishni anglatadi minus indexga bersaj boladi
// zbe
console.log(sayhello.substring(1,3)) // minus indexni foydalana olmaymiz
console.log(sayhello.substr(1,5))

// Numbers methods
const num1=6.7;
// const num2=Number;

console.log(Math.round(num1))

const borderwidth='13.8px';
console.log(parseInt(borderwidth));