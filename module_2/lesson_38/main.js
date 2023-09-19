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
const myAnimation=()=>{
    const car = document.querySelector('#car');
    let pos=0;
    const termid=setInterval(()=>{
        if (pos ===700){
            clearInterval(termid);
        }else{
            pos++;
            car.style.left =pos+'px';
        }
    },10)
    
}


btn.addEventListener('click',myAnimation);