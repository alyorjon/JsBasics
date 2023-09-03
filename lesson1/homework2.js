"use strict";


let numberOfSeries=prompt("Nechta serial ko'rdingiz");

// console.log(numberOfSeries)
const seriesDB={
    count:numberOfSeries,
    series :{},
    actors:{},
    genres:[],
    private:false,    
}

for (let i = 1;i<3;i++){
    let a = prompt("Oxirgi ko'rgan serialingiz");
    let b = +prompt("Necha baxo berasiz");
    if (a !=''&& b !='' && a!=null && b!=null){
        seriesDB.series[a]=b;
    }else{i--; continue;}
}

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;
if (seriesDB.count< 5){
    console.log("Kam serial ko'ribsiz");
} else if (seriesDB.count>=5 && seriesDB.count<10){console.log("Siz klassik tomoshabinsiz");}else{console.log("Siz kinosizyashay olmaysiz")}
console.log(seriesDB)