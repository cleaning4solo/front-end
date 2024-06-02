import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../public/css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./views/app";
import "./components/dark-mode";
import navbarScroled from "./components/navbar-scroled";
import navbarToggle from "./components/mobile-nav";
import createScrollUpButton from "./components/scroll-up";

AOS.init({
  duration: 1000,
});

const app = new App({
  content: document.querySelector("#main-content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
  createScrollUpButton();
});

window.addEventListener("load", () => {
  app.renderPage();
  createScrollUpButton();
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.remove();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  navbarScroled();
  navbarToggle();
  const storedMode = localStorage.getItem("darkMode");
  if (storedMode === "true") {
    document.body.classList.add("dark-mode");
  }
});

// const glightbox = GLightbox({
//   selector: ".glightbox",
// });
