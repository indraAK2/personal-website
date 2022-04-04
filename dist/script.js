const hamburgerBtn = document.getElementById("hamburgerBtn");
const navbar = document.querySelector("header");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  const { scrollY } = window;

  if (scrollY > navbar.clientHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});
