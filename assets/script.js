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

// Animation script for Marvel Movies
    const animationMarvelMovies = ["The Infinity Saga"];

  // Typing animation script start
    new Typed("#marvelMovies", { 
        strings: animationMarvelMovies,
        typeSpeed: 47,
        backSpeed: 222,
        loop: true,
        showCursor: false
    });

    const animationMultiverseSaga = ["The Multiverse Saga"];

  // Typing animation script start
    new Typed("#multiverse", {  // use id selector
        strings: animationMultiverseSaga,
        typeSpeed: 47,
        backSpeed: 222,
        loop: true,
        showCursor: false
    });

// Animation script for Marvel Series
    const animationMarvelSeries = ["Marvel Series"];

  // Typing animation script start
    new Typed("#marvelseries", {  // use id selector
        strings: animationMarvelSeries,
        typeSpeed: 47,
        backSpeed: 222,
        loop: true,
        showCursor: false
    });



// Animation script for Sony Movies
    const animationSonyMovies = ["Sony Movies"];

  // Typing animation script start
    new Typed("#sony", {  // use id selector
        strings: animationSonyMovies,
        typeSpeed: 47,
        backSpeed: 222,
        loop: true,
        showCursor: false
    });
    
// Animation script for Fox Movies
    const animationFoxMovies = ["Fox Movies"];

  // Typing animation script start
    new Typed("#fox", {  // use id selector
        strings: animationFoxMovies,
        typeSpeed: 47,
        backSpeed: 222,
        loop: true,
        showCursor: false
    });