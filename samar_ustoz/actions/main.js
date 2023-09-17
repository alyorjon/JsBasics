"use strict";
// method 1
const btn=document.querySelector('#btn');
// btn.onclick=()=>{
//     alert('Click')
// };
// btn.onclick=()=>{
//     alert('Click 3')
// }
// 2- usul  click
btn.addEventListener('click',()=>{
    alert('Click3')
})
 
const btn2= document.querySelector('#btn2')
btn2.addEventListener('mouseenter',(event)=>{
    console.log(event);
    event.target.remove();
    // alert("Hover");
})

const url=document.querySelector('.url');
url.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("url")
})

const buttons = document.querySelectorAll('button');
buttons.forEach((item)=>{
    item.addEventListener('click',()=>{
        console.log(3)
    })
})