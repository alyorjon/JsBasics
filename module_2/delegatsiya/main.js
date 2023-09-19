'use strict';


const wrapper = document.querySelector('.student'),
    btns=document.querySelectorAll('button');
wrapper.addEventListener('click',(e)=>{
    console.dir(e.target)
})

btns.forEach(item=>{
    item.addEventListener('click',()=>{
        console.log('clicked')
    })
})