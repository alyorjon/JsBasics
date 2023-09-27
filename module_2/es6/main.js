"use strict";
class CAR{
    constructor(name,color,speed){
        this.name=name;
        this.color=color;
        this.speed=speed;
    }
    carspeed(){
        return this.speed*100
    }
}


class SPARK extends CAR{
    constructor(name,color,speed,isAirbag,isExtraBallon){
        super(name,color,speed);
        this.isAirbag=isAirbag;
        this.isExtraBallon=isExtraBallon;
    }
    lg(){
        console.log(`Name of car ${this.name}.Color is ${this.color}. IsAirbag is ${this.isAirbag}`)
    }
}
const car1= new CAR('bmw','100',100);
// console.log(car1.carspeed())
// console.log(car1)

const car2 = new SPARK('AAA','red',100,'no','no')
console.log(car2.carspeed())