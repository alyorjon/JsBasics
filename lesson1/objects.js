"use strict";
const obj1={
    name:'Aisha',age:26,jacket:'black',heigth:1.7,color:{body:'balck',hair:'red'},
    howof:function(){
        console.log('howof')
    }
};

// console.log(obj1)
// Delete obj 
// delete obj1.age;
// console.log(obj1)


// // get keys
// console.log(Object.keys(obj1));
// console.log(Object.keys(obj1).length);

// // sikl yordamida
// for (let key in obj1){
//     if (typeof obj1[key]==='object'){
//         for (let key2 in obj1[key]){
//             console.log(`Key is ${key2}. value is ${obj1[key][key2]}`);        
//         }    
//     }else{
        
//     console.log(`Key is ${key}. value is ${obj1[key]}`);
//      }};


// // 


const {age,name} =obj1.color;
console.log(age,name)
obj1.howof()