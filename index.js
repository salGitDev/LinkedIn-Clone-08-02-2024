let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

let profileMenu = document.getElementById("profileMenu");

function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

window.onload = function(e){
    if (window.pageYoffset > 108) {
        document.querySelector("nav").classList.add('is-scrolling');

    } else {
        document.querySelector("nav").classList.remove("is-scrolling");
    }
    const menu_btn = document.querySelector('.hamburger');
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
    })
}