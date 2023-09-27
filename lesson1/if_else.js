"use strict";
// Example 1
// const colour= prompt("Svitafor rangini yoz")
// if (colour=='yellow'){
//     console.log("Yur")
// }else if (colour=='red'){
//     console.log('toxta')
// }else {
//     'tayyorlan'
// }


// Example 2
// const age =+prompt("Yoshingni kirit");
// if (age < 17){console.log('ruxsat berilmagan')}else if (age >= 17 && age <24){console.log('yarim ruxsat')}else {console.log('korishing mumkin')}

// // bir qatorli operatorlar
// (age<17)? console.log("Mumkin emas"):console.log("Mumkin")

// Switch case yordamida qattiy rejimda ishlaydi
const color = prompt("write color");
switch (color){
    case 'red':console.log("taqiqlangan");break;
    case 'yellow':console.log("Tayyorlan");break;
    case 'green':console.log("Ruxsat berilgan");break;
    default : console.log("XAto kiritildi");
}