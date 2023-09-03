"use strict";
let number;
// Function yordamida bajaramiz
function getNumberOfmovies(){
    return prompt("How many movies do you watch");
    
};
function getPersonData(){
    let count=getNumberOfmovies()
    seriesDB={
        count:count,series:{},actors:{},genres:{},private:false,
    };
   
}
console.log(getPersonData())