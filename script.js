const menu = document.querySelector(".btn-open-menu");
const close = document.querySelector(".btn-close-menu");
const header = document.querySelector(".header");
menu.addEventListener("click", () => {
  header.classList.add("nav-open");
});
close.addEventListener("click", () => {
  header.classList.remove("nav-open");
});
