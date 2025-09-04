// Side Navbar display
var sidenav= document.querySelector(".navbar-side")

function toggleMenu(){
    sidenav.style.left = "0"
}

function closeNavbar(){
    sidenav.style.left = "-60%"
}

// Close the menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
    const listcontents = document.querySelectorAll(".navbar-side ul li a");

    listcontents.forEach(function (listcontent) {
        listcontent.addEventListener("click", function () {
            document.querySelector(".navbar-side").style.left = "-60%";
        });
    });
});

