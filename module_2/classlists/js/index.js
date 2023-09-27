"use strict";


const btns =document.querySelectorAll('button')

// console.log(btns[0].classList.length)// class kengligi
// console.log(btns[0].classList.item)// class ichidagi elementni chiqarib beradi


btns[1].classList.add('blue')
btns[1].classList.remove('blue')
btns[1].classList.toggle('blue')// agar boor bolsa yoq qiladi. yoq bolsa bor qiladi
// contains bor ligini tekshiradi
if  (btns[0].classList.contains('blue')){
    console.log('ha')
}btns[0].classList.add('green')
if  (btns[0].classList.contains('green')){
    console.log('ha')
}


btns[1].addEventListener('click',()=>{
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red')
    // }else{
    //     btns[1].classList.remove('red')
    // }
    btns[1].classList.toggle('red')
})
