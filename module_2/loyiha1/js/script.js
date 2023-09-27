"use strict";
window.addEventListener("DOMContentLoaded",()=>{
    const tabParrent =document.querySelector('.tabheader_items'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent=document.querySelectorAll('.tabcontent');
    
    const hidetabcontent=()=>{
        tabsContent.forEach((item)=>{
            item.style.display='none'
        })
        tabs.forEach((item)=>{
            item.classList.remove('tabheader__item_active')
        })
    };
    const showcontent=(i=0)=>{
        tabsContent[i].style.display='block'
        tabs[i].classList.add('tabheader__item_active')
    }
    hidetabcontent()
    showcontent()

    tabParrent.addEventListener('click',(e)=>{
        const target=e.target
        
    })
})