"use strict";


let l = 0;

const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    if (l===3){
        clearInterval(termid);
        l=0;
    }

    l++;
    const termid=setTimeout(()=>{
        console.log('log click')
    },1000);
    // clearInterval(chat);
});

// const chat=setTimeout(()=>{
//     console.log('set time out')
// },1000)

