"use strict";


class CAR {
    constructor(name, speed, color) {
        this.name = name,
            this.speed = speed,
            this.color = color,
            this.isAirbag=true;
            this.stop=()=>{
                console.log('stop')
            }
    }
}
CAR.prototype.start = (name)=>{
    console.log(name);
};
const bmw=new CAR('bmw',300,'red');
const tesla=new CAR('tesla',350,'blue');
// console.log(bmw.stop())
// console.log(bmw.start('bl'))
// console.log(bmw.stop())
// console.log(tesla.start('cl'))
// console.log(bmw)





function logger(){
    console.log(this)
    function sum(){
        const a=15,
        b=10;
        console.log(a,b)
        return a,b 
    }
    sum()
}
logger()

// Context this obj ichidagi methodga teng boladi
const obj = {
    x:10,y:20,sum:function(){
        console.log(this)
        // context ichidagi this nomalumga teng boladi
        function newfunc(){
            console.log(this)
        }
        newfunc()
    }
}
obj.sum();




// 
function CAR2(name,color){
    this.name=name;
    this.color=color;
}
const bmw2=new CAR2('bmw','red')
console.log(bmw2)