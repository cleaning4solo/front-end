import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/css/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import App from './views/app';
import './components/dark-mode';
import navbarScroled from './components/navbar-scroled';

AOS.init();

const swiper = new Swiper('.swiper-container');

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.remove();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const storedMode = localStorage.getItem('darkMode');
  if (storedMode === 'true') {
    document.body.classList.add('dark-mode');
  }
  navbarScroled();
});
