"use strict";
let number;
// Function yordamida bajaramiz
function startapp(){
    number= prompt("How many movies do you watch");
    while (number ==""|| number==null||number==isNaN(number)){number=prompt("How many movies do you watch?");}
    return number
};
const seriesDB={
    count:number,series:{},actors:{},genres:{},private:false
};
function remember(){
    for (let i =0;i<2;i++){
        const a=prompt("Oxirgi ko'rgan filimingiz"),b=prompt('Bergan baxoyingiz');
        if (a!=null&& a!="" && b!=null && b!=""){
            seriesDB.series[a]=b;
        }else{
            i--
        }
    }
}
function commits(){
    if (seriesDB.count<5){
        console.log("Kam kino korasiz")
    }else if (seriesDB.count>=5 && seriesDB<10){
        console.log("Kino kop korasiz");

    }else{
        console.log("Yotvolib korasiz")
    }
}
function getPersonData(){
    startapp()
    remember()
    commits()
}

function showdb(){
    (seriesDB.private==false)?console.log(seriesDB):console.log(null)
}
function writegenres(){
    for (let i =1;i<4;i++){
        const genr=prompt("Yaxshi ko'rgan jangringizni yozing")
        if (genr!=''&& genr!=null ){
            seriesDB.genres[i]=genr;        
        }else{
            i--
        }
    }
    let len=seriesDB.genres;
    for (let ii=0;ii<len+1;ii++){
        console.log(`Yaxshi ko'rgan janringiz ${seriesDB.genres[ii]}`)
    }
}
getPersonData()
writegenres()
console.log(seriesDB)