'use strict';
// if else statements
let a=5;
let   b=9;

if (a < b) {            
    let output = a + b;        
    console.log(output)
}else if (a==b){
    console.log(5)
}
 else {            
    let output = a - b;
    console.log(output)        
}
// Ternary Operator ? operator (condition ? true:false)
console.log(a>b?true
        :(a<b?true
            :(a===b?true
                :false)))
//  Array Destructuring
let newArray = ["Musab", "I", "Handsome"];    
let [noun, pronoun, adjective] = newArray; 

// The above can also be rewritten as this:  

// let [noun, pronoun, adjective] = ["Musab", "I", "Handsome"];    

console.log(noun);    
console.log(pronoun);
// object destructuring
let personObject = {        
    names: "David",        
    age: 18,        
    height: "6ft 5in",        
    gender: "male",    
}    

let {names, age, height, gender} = personObject   
console.log(names, age, height, gender);

//  objects in js
let myObject = {        
    name: "Musab",        
    number: 12,        
    developer: [true, "David", 1]    
}

console.log(myObject["name"]);
console.log(myObject.number);
