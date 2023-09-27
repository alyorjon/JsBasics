"use strict";
let number;
// Function yordamida bajaramiz

const seriesDB={
    count:0,series:{},actors:{},genres:{},private:false,
    startapp:()=>{seriesDB.count= prompt("How many movies do you watch");
    while (seriesDB.count ==""|| seriesDB.count==null||seriesDB.count==isNaN(seriesDB.count)){seriesDB.count=prompt("How many movies do you watch?");}
    return seriesDB.count},
    lastmovie:()=>{
        for (let i =0;i<2;i++){
        const a=prompt("Oxirgi ko'rgan filimingiz"),b=prompt('Bergan baxoyingiz');
        if (a!=null&& a!="" && b!=null && b!=""){
            seriesDB.series[a]=b;
        }else{
            i--
        }
    };},
    lastmoviecomment:()=>{
        if (seriesDB.count<5){
            console.log("Kam kino korasiz")
        }else if (seriesDB.count>=5 && seriesDB<10){
            console.log("Kino kop korasiz");
    
        }else{
            console.log("Yotvolib korasiz")
        };
    },
    visibleDB:()=>{
        if (seriesDB.private==true){
            seriesDB.private=false
        }else{
            seriesDB.private=true
        };
    },

    writegenres:()=>{
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

};
console.log(seriesDB.visibleDB())