const bars = document.getElementById("bars");
const nav = document.getElementById("navigation")

function toogleMenu() {
    
    nav.classList.toggle('active');
}

bars.addEventListener("click", toogleMenu);
