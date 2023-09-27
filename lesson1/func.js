"use strict";
function sayHello(){
    console.log('say hello function');
}


function add(a,b){console.log(a+b)}
sayHello();
add(1,2)

function summofperson(name,age,job){
    console.log(`My name is ${name}. My age is ${age}.My job is ${job}`)
}

summofperson("Aisha",26,'it0')


function re1(a,b){
    return a+b;
}
const a =re1(1,5)
console.log(a)


const summ1 =(d,c)=>d+c;
console.log(summ1(5,8 ))