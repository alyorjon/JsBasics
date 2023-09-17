"use strict";

console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes);/*  textlarni chiqaradi*/
console.log(document.body.lastChild.lastChild) /*  */
console.log(document.body.firstChild.lastChild) /*  */

console.log(document.querySelector('#btn').parentNode.parentNode)


console.log(document.querySelector('[data-current="5"]').nextSibling.previousSibling)