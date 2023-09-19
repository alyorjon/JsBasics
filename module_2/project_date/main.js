'use strict';

const deadline=new Date('2023-09-22');




const getTimeRemaining=(endtime)=>{
    
    const timer=Date.parse(endtime)-Date.parse(new Date());
    
    let days=Math.floor(timer/(1000*60*60*24));
    let hours=Math.floor((timer/(1000*60*60))%24);
    let min=Math.floor((timer/(1000*60))%60);
    let sec=Math.floor((timer/(1000))%60);
    let secon=getzero(sec)
    return {days,hours,min,secon}

}


function getzero(num){
    if (num >=0 && num <10){
        return `${num}`
    }else{
        return num
    }
}
const setclock=(endtime)=>{
    const timer=document.querySelector('.timer'),
        day=timer.querySelector('#days'),
        hour=timer.querySelector('#hours'),
        minute=timer.querySelector('#minutes'),
        second=timer.querySelector('#seconds'),
        timeinterva=setInterval(updateclock, 1000);
    function updateclock(){
        const t=getTimeRemaining(endtime);

        day.innerHTML=getzero(t.days);
        hour.innerHTML=getzero(t.hours);
        minute.innerHTML=getzero(t.min);
        second.innerHTML=getzero(t.secon);
        if (t.timer <=0){
            clearInterval(timeinterva)
        }
    };
}
getTimeRemaining(deadline)
setclock(deadline)