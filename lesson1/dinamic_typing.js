"use strict";
// Dynamic typing string=> int,int=>string

// to string
const num = 5;
// 1-
console.log(num.toString())
// 2-
console.log(typeof String(8) )


// to number
// 1-
console.log(typeof Number('88'))
// 2-
console.log(typeof parseInt('99'))

// booling
//  0,"",null,undefined,NaN= false


const age = 0;
if ( age){
    console.log('Success');
}else{
    console.log('Error')
}
console.log(age)

console.log( !!0)