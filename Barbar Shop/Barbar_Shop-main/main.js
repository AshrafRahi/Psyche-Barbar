var menuBtn = document.getElementById("menuBtn");
var sidNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sidNav.style.right = "-250px";

menuBtn.onclick = function () {
    if (sidNav.style.right === "-250px") {
        sidNav.style.right = "0";
        menu.src = "Barber_Shop_img/close.png";
    }else {
        sidNav.style.right = "-250px";
        menu.src = "Barber_Shop_img/menu.png";
    }
}


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});
