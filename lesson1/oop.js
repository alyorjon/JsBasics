"use strict";


// const names='Aisha';
// const st=new String(names);
// console.log(st);
// console.log(names);


const car ={
    mator:"x",isAirBag:true,color:'green',
    isSpeed: function(){
        console.log(350)
    }
};
const gm={
    isAirBag:false,};
// console.log(car);
// console.log(gm);

gm.__proto__=car
console.log(gm.color)


const bmw = {
    country:"Germany",
};
Object.setPrototypeOf(gm,car) // oop olish birinchisi child ikkinchisi parent hisoblanadi
console.log(gm.isSpeed())


Object.setPrototypeOf(bmw,car)
console.log(bmw.country)
console.log(bmw.color)