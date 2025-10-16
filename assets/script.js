//Loading Screen Script

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.classList.add("hidden");
  }, 700);
});

// Scroll to Top Button

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 333) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Navbar Script

let sideNavbar = document.querySelector(".side-navbar");
let showToggle = document.querySelector(".show-navbar");
let showCloseBtn = document.querySelector(".close-navbar");

document.querySelector(".toggle-btn").addEventListener("click", function () {
  sideNavbar.style.left = "0";
  showToggle.style.display = "none";
  showCloseBtn.style.display = "flex";
});

document.querySelector(".x-mark").addEventListener("click", function () {
  sideNavbar.style.left = "-70%";
  showToggle.style.display = "flex";
  showCloseBtn.style.display = "none";
});

// Close the menu when a link is clicked

document.addEventListener("DOMContentLoaded", function () {
  const listcontents = document.querySelectorAll(".side-navbar a");

  listcontents.forEach(function (listcontent) {
    listcontent.addEventListener("click", function () {
      sideNavbar.style.left = "-70%";
      showToggle.style.display = "flex";
      showCloseBtn.style.display = "none";
    });
  });
});

// Close dropdown when clicking any Phase link
const navDropdownBtn = document.querySelector(".dropdown-btn");
const navDropdown = document.querySelector(".dropdown-content");
const navLinks = document.querySelectorAll(".dropdown-content a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navDropdown.style.display = "none";
  });
});

navDropdownBtn.addEventListener("mouseover", function () {
  navDropdown.style.display = "flex";
});

// Animation script for Marvel Movies
const animationMarvelMovies = ["The Infinity Saga"];

// Typing animation script start
new Typed("#marvel-movies", {
  strings: animationMarvelMovies,
  typeSpeed: 47,
  backSpeed: 222,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});

const animationMultiverseSaga = ["The Multiverse Saga"];

// Typing animation script start
new Typed("#multiverse", {
  // use id selector
  strings: animationMultiverseSaga,
  typeSpeed: 47,
  backSpeed: 222,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});

// Animation script for Marvel Series
const animationMarvelSeries = ["Marvel Series"];

// Typing animation script start
new Typed("#marvel-series", {
  // use id selector
  strings: animationMarvelSeries,
  typeSpeed: 47,
  backSpeed: 222,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});

// Animation script for Sony Movies
const animationSonyMovies = ["Sony Movies"];

// Typing animation script start
new Typed("#sony", {
  // use id selector
  strings: animationSonyMovies,
  typeSpeed: 47,
  backSpeed: 222,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});

// Animation script for Fox Movies
const animationFoxMovies = ["Fox Movies"];

// Typing animation script start
new Typed("#fox", {
  // use id selector
  strings: animationFoxMovies,
  typeSpeed: 47,
  backSpeed: 222,
  loop: true,
  showCursor: true,
  cursorChar: "|",
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id "year"
document.getElementById("year").textContent = currentYear;
