import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import '../public/css/style.css';

// Initialize libraries if necessary
AOS.init();
const lightbox = GLightbox();
const swiper = new Swiper('.swiper-container');
 
console.log('Hello Coders!');