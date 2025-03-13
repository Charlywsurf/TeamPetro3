const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".uil-bars");
const navClose = document.querySelector(".uil-times");


navBar.classList.toggle("uil-visible");

navBar.addEventListener("click", () => {
   
    navBar.classList.remove("uil-visible");
    navClose.classList.toggle("uil-visible");
    navMenu.classList.toggle("nav-menu_visible");

});


navClose.addEventListener("click", () => {
    
    navClose.classList.remove("uil-visible");
    navBar.classList.toggle("uil-visible");
    navMenu.classList.remove("nav-menu_visible");
});