
function toggleMenu() {
    document.querySelector(".navbar-side").style.left = "0";
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

