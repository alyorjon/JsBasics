'use strict';

const deadline=new Date('2021-09-22');




const getTimeRemaining=(endtime)=>{
    let days,hours,min,sec,secon
    const timer=Date.parse(endtime)-Date.parse(new Date());
    if (timer<0){
        days=0
        hours=0
        min=0
        sec=0
        secon=0
    }else{
        days=Math.floor(timer/(1000*60*60*24));
        hours=Math.floor((timer/(1000*60*60))%24);
        min=Math.floor((timer/(1000*60))%60);
        sec=Math.floor((timer/(1000))%60);
        secon=getzero(sec)
    }
    
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
            clearInterval(timeinterva);
        }
    }
}
getTimeRemaining(deadline)
setclock(deadline)