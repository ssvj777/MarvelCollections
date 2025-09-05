//Navbar Script 

let sideNavbar = document.querySelector(".sideNavbar")

function toggleMenu(){
    sideNavbar.style.left = "0"
}

function closeNavbar(){
    sideNavbar.style.left = "-70%"
}


// Close the menu when a link is clicked

document.addEventListener("DOMContentLoaded", function () {
    const listcontents = document.querySelectorAll(".sideNavbar a");

    listcontents.forEach(function (listcontent) {
        listcontent.addEventListener("click", function () {
            document.querySelector(".sideNavbar").style.left = "-70%";
        });
    });
});

