"use strict"

const hamburger = document.getElementsByClassName("hamburger")[0];
const slideMenu = document.getElementsByClassName("overlay")[0];
const closeClick = document.getElementsByClassName("close")[0];
const body = document.getElementsByTagName("body")[0];



hamburger.addEventListener("click", ()=> {
    slideMenu.style.display = "block";
    body.style.height = "100vh"
    body.style.overflow = "hidden"
})

closeClick.addEventListener("click", ()=> {
    slideMenu.style.display = "none";
    body.style.height = "auto"
    body.style.overflow = "unset"
})
