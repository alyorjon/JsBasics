

const h = document.querySelector('h1')

console.log(h);

const newscript=document.createElement('script');
newscript.src='./main.js';
document.body.append(newscript);