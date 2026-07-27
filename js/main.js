/* ======================================
   COMMIT 6
====================================== */

/************ BACK TO TOP ************/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/************ NAVBAR ************/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("scroll");
    }else{
        header.classList.remove("scroll");
    }

});


/************ DARK MODE ************/

const toggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");
        toggle.textContent="☀️";

    }else{

        localStorage.setItem("theme","light");
        toggle.textContent="🌙";

    }

});
/************ MENU HAMBURGER ************/

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});