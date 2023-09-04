'use strict'

// Eski methodlar
const box = document.getElementById("box")
console.log(box)
const button = document.getElementsByTagName('button')// royxat qaytaradi
console.log(button)
const classes= document.getElementsByClassName('circle') // ro'yxat qaytaradi
console.log(classes)

// Yangi method. protolari kop
const wrapper = document.querySelector('.wrapper');// bitta natijani 
console.log(wrapper)


const hearts_all = wrapper.querySelectorAll('.heart');// jami selectorlar uchun natijani 
console.log(hearts_all )

hearts_all.forEach((item)=>{
    console.log(item);
})



//  dom methods 
const box_new =document.querySelector('#box')
//  Rangini o'zgartirish
box_new.style.background='yellow';
box_new.style.width='300px';


const button_new= document.querySelectorAll('button');
button_new[1].style.background='red';

const class_new = document.querySelectorAll('.circle');
class_new[2].style.background='green';

//  css text yordamida css qoshish
box_new.style.cssText='background-color:purple;width:150px';
const hearts_new=document.querySelectorAll('.heart')
for (let i =0;i<hearts_new.length;i++){
    hearts_new[i].style.background='green'
}
//  har bir element uchun foreach bilan ishlash yaxshi
hearts_new.forEach((item)=>{
    item.style.background ='grey'
})
const circle_wrapper= document.querySelector('.circle__wrapper')
const but=document.createElement('button')
but.style.background='red'
const myCircle=document.createElement ('div')
myCircle.classList.add('circle');
// circle_wrapper.append(myCircle);
// circle_wrapper.before(myCircle);
// circle_wrapper.after(myCircle);
// class_new[1].remove()
class_new[1].replaceWith(myCircle)