import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos';
// import GLightbox from 'glightbox';
import Swiper from 'swiper';
import '../public/css/style.css';

// Initialize libraries if necessary
AOS.init();
// const lightbox = GLightbox();
const swiper = new Swiper('.swiper-container');

document.addEventListener('DOMContentLoaded', () => {
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;
  
      const headerFixed = () => {
        if ((headerOffset - window.scrollY) < 0) {
          selectHeader.classList.add('sticked', 'py-4', 'shadow');
          if (nextElement) nextElement.classList.add('sticked-header-offset');
        } else {
          selectHeader.classList.remove('sticked', 'shadow');
          if (nextElement) nextElement.classList.remove('sticked-header-offset');
        }
      }
      window.addEventListener('load', headerFixed);
      document.addEventListener('scroll', headerFixed);
    }
})
