"use strict";
const box = document.querySelector('.box'),
    btn = document.querySelector('button')
// console.dir(box)
// real px
// const width=box.clientWidth;
// const height=box.clientHeight;


// width + padding
// const width=box.offsetWidth;
// const height=box.offsetHeight;


// scrol malumoti
const width=box.scrollWidth;
const height=box.scrollHeight;

console.log(width)
console.log(height)



btn.addEventListener('click',()=>{
    const scrolltop=box.scrollTop;
    console.log(scrolltop)

    
})



const style = window.getComputedStyle(box)
style.boxShadow=300+'px';
console.log()