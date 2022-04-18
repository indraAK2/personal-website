const hamburgerBtn = document.getElementById("hamburgerBtn");
const navbar = document.querySelector("header");
const navMenu = document.getElementById("navMenu");
const toTopButton = document.getElementById("toTopBtn");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  const { scrollY } = window;

  if (scrollY > navbar.clientHeight) {
    navbar.classList.add("fixed");
    toTopButton.classList.remove("hidden");
    toTopButton.classList.add("flex");
  } else {
    navbar.classList.remove("fixed");
    toTopButton.classList.remove("flex");
    toTopButton.classList.add("hidden");
  }
});

// klik diluar area dari dari navbarmenu
window.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
    navMenu.classList.add("hidden");
    hamburgerBtn.classList.remove("hamburger-active");
  }
});

// Dark mode toggle
const darkToggle = document.getElementById("dark-toggle");
const html = document.documentElement;

darkToggle.addEventListener("change", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

// load & gunakan theme dari localStorage
const theme = localStorage.getItem("theme") ?? "light";
if (
  localStorage.theme === "dark" ||
  ("theme" in localStorage &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
  html.classList.add("dark");
} else {
  darkToggle.checked = false;
  html.classList.remove("dark");
}
