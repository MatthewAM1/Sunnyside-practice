const mobileNav = document.querySelector(".mobile-nav");
const humbergerButton = document.querySelector(".humberger-button");

humbergerButton.addEventListener("click", function () {
  humbergerButton.classList.toggle("rotate");
  mobileNav.classList.toggle("show");
});
