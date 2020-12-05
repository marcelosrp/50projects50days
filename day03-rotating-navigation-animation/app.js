const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const main = document.querySelector(".main");
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

function rotateContainer() {
  main.classList.add("rotate");
  menu.classList.add("rotate");
  showNav();
}

function resetContainer() {
  main.classList.remove("rotate");
  menu.classList.remove("rotate");
  hideNav();
}

function showNav() {
  nav.classList.add("active");
}

function hideNav() {
  nav.classList.remove("active");
}

btnOpen.addEventListener("click", rotateContainer);
btnClose.addEventListener("click", resetContainer);
