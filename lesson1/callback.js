"use strict";
function firstfunc(){
    // birinchi code 
  
    setTimeout(()=> {
        console.log(1);
    },2000);
}
function secondfunc(){
    // ikkinchi code
    console.log(2);
}

firstfunc()
secondfunc()


function edu(sub,callback){
    console.log(sub);
    callback();
}
//  Bir func tugagandan song keyingisiga otadigan function
edu('Aisha',function(){console.log('create')})