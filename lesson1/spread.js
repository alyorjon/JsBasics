"use strict";
const func1=(x,y,z)=>{
    console.log(x+y+z);};
func1(1,2,3);


const calculate =[1,5,3]// spread operatori arrayni oddiy holatga ogirib beradi.
func1(...calculate)


const arr=['x','z'];
const newarr1=[...arr];
console.log(newarr1)

//  obj nusxa olishda ham ishlatsa boladi

const obj={z:1,x:2};
const newobj={...obj}/// ... nuqta orqali nusxa oldik 
console.log(obj);
console.log(newobj);
newobj.x=4;
console.log(newobj);
