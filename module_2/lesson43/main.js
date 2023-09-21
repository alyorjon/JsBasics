'use strict';




function logger(){
    console.log(this)
    console.log(this.name)

}


function logger1(speed){
    console.log(this)
    console.log(this.name)
    console.log(speed)
}
const car = {
    name:'bmw',color:'red',
};
// call,apply ozgaruvchini biriktirib qoyish

// logger.call(car);
// logger.apply(car);
// logger1.apply(car,[400]);/* apply array [] bilan data  oladi */
// logger1.call(car,300) /* call arraysiz oladi */
// agar functionga data bersak 


function calc(num){
    return this*num
}
const mul=calc.bind(3)/**bind bu bizga yangi funksiya qaytardi. va uni ishlata olamiz */
// console.log(mul(40))



const btn = document.querySelector('button')
btn.addEventListener('click',()=>{
    
    console.log(this)
})

btn.addEventListener('click',function(){
    this.style.width='400px'
    console.log(this.style.width)
})

const obj1={
    x:1,y:2,sum:function(){
        const logger=()=>{
            console.log(this)
        }
        logger()
    },
}
obj1.sum()
// ()=> function hech qachon contextga ega emas,u har doim ozining mothergiga osiladi.
