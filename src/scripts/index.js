import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/css/style.css';
import AOS from 'aos';
import Swiper from 'swiper';
import App from './views/app';

import './components/dark-mode';

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
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    const headerOffset = selectHeader.offsetTop;
    const nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) < 0) {
        selectHeader.classList.add('sticked', 'py-4', 'shadow');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked', 'shadow');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    };
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }
});
