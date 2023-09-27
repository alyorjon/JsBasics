'use strict';


let newarr=[2,5,8,3]
newarr
// console.log(newarr)
// push and unshift methods
newarr.push(3)
// console.log(newarr)
newarr.unshift(99)
// console.log(newarr)

// shift and pop method 
newarr.shift()
newarr.pop()

// get full length
// console.log(newarr.length)

// slice methods
let arr_2=['dog','horse','cat','fish']
// arr_2.splice(1,2)
// console.log(arr_2.slice(1,2))
// to add new elements
// console.log(arr_2.splice(1,0,'fishes','elephant'))

let animals = ['Dog', 'Cat'];

animals.splice(1, 0, 'Bird', 'Squid');

// console.log(animals);
// [ 'Dog', 'Bird', 'Squid', 'Cat' ]
// to check if a variable is an array
let newarr4=[1,2,3];
let newarr3='hello';
// console.log(Array.isArray(newarr3))
// console.log(Array.isArray(newarr4))

// to iterate arrays 
// for (let i =0;i<newarr4.length;i++){console.log(i)}

//  to itirate and give function to it
for (let i in newarr4){
    console.log(newarr4[i])
}
let animals22 = ['dog', 'bird', 'cat', 'horse'];

for (let element of animals22) {
  console.log(element);
}


//  forEach() iterate from posion 0 to last position
animals22.forEach(function (element, index) {
    console.log(`${index}: ${element}`);
  });
  animals22.forEach((element, index,array)=> {
    console.log(`${index}: ${element} : ${array}`);
  });


//  convert array to string
console.log(animals22.toString())
console.log(animals22.join('/'))
console.log(animals22.join(''))

let arrayOne = [7, 8, 9];
let arrayTwo = [7, 8, 9];

console.log(JSON.stringify(arrayOne) === JSON.stringify(arrayTwo)); // true
// compare to arrays using every (cb)
let result =
  arrayOne.length === arrayTwo.length &&
  arrayOne.every(function (element, index) {
    // compare if the element matches in the same index
    return element === arrayTwo[index];
  });

console.log(result); // true
// using to compare two array via includes(element)
let result1 =
  arrayOne.length === arrayTwo.length &&
  arrayOne.every(function (element) {
    return arrayTwo.includes(element);
  });

// console.log(result1); // true
// indexOf(element)  if it is true return 1 else -1
// console.log(arrayOne.indexOf(8))
// console.log(arrayTwo.indexOf(99))

// slice() to copy array as the same bu usulda copy qilish parent arrayni ham ozgartirib yuboradi. parent va child array elementlariga bir xil tasir qiladi
let newarrayone=arrayOne.slice()
// console.log(newarrayone)
// agar deep copy qilmoqchi bolsak JSON.parse() yoki JSON.stringfy() methodlaridan foydalnanish kerak. Bunda parent array qiymati ozgarmasdan qoladi
let arrone=[{ name: 'Jack', age: 25 }];
let arrtwo=JSON.parse(JSON.stringify(arrone));

// console.log(arrone); // [ { name: 'Jack', age: 25 } ]
// console.log(arrtwo); // [ { name: 'Jack', age: 25 } ]

arrtwo[0].name = 'Nathan';

// console.log(arrone); // [ { name: 'Jack', age: 25 } ]
// console.log(arrtwo); // [ { name: 'Nathan', age: 25 } ]

//  add two arrays to one  concat()
let cats = ['tiger', 'cat'];
let birds = ['owl', 'eagle'];

let animals33 = cats.concat(birds);

// console.log(animals33); // [ 'tiger', 'cat', 'owl', 'eagle' ]
// console.log(cats); // [ 'tiger', 'cat' ]
// console.log(birds); // [ 'owl', 'eagle' ]
// The concat() method allows you to merge as many arrays as you need. The following example merges three arrays as one:
let newres= [].concat(cats,birds,animals33)
// console.log(newres)
// boshqa yana bitta usuli bu ... hisoblanadi bu usulda ham array birlashtirsa boladi
let newres2=[...cats,...birds,...animals22]
// console.log(newres2)

//  filter methods
//  royxatda bor yoki yoqligini tekshirish include()
let letters2 = ['a', 'b', 'c', 'd'];

console.log(letters2.includes('e')); // false
//  find out position of element in array
console.log(letters2.indexOf('c'))//2

//  filter(cb,thiscontext) bu usul orqali arrayni aniq bir filter qilsak boladi, va yangi array hosil boladi
let stockPrices = [3, 7, 2, 15, 4, 9, 21, 14];

let filteredPrices = stockPrices.filter((currentElement,index,array)=> {
    // console.log(`${index}:${array}`)
    return currentElement > 5;
});

console.log(filteredPrices); // [7, 15, 9, 21, 14]

//  sort() is tartiblash
let numbers = [5, 2, 4, 1];

numbers.sort();

console.log(numbers); // [ 1, 2, 4, 5 ]
// teskari tartiblash methodi
console.log(numbers.reverse())


// map(cb)
let fruits = ["pawpaw", "orange", "banana"];   

let mappedFruits = fruits.map((item) => item + "s");    

console.log(mappedFruits);
let evenNumbers = [2, 4, 6, 8, 10]; 
    
let a2 =evenNumbers.reduce((sum, current) => sum += current, 0);
console.log(evenNumbers)
console.log(a2)