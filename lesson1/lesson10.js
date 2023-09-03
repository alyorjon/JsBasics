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
const a = prompt('Oxirgi korgan serialingiz'),b=prompt('Nechi baxo berasiz'),c=prompt("Oxirgi ko'rgan serialingiz"),d=prompt("NEchi baxo berasiz");
seriesDB.series[a] = b;
seriesDB.series[c] = d;
console.log(seriesDB)