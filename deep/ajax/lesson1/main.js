"use strict"
const uzs = document.querySelector('#uzs'),
    usd =document.querySelector('#usd')
// console.log(uzs);
uzs.addEventListener('input',(e)=>{
    const req = new XMLHttpRequest();
    req.open('GET','./main.json')
    req.setRequestHeader('Content-Type','application/json; charset=utf-8')
    req.send()
    req.addEventListener('readystatechange',()=>{
        if (req.readyState===4 && req.status===200){
            console.log(req.response)
            const data= JSON.parse(req.response);
            usd.value=(+uzs.value/data.current.usd).toFixed(2)
        }
    })
})
usd.addEventListener('input',(e)=>{
    console.log(e)
})