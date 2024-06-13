import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/admin.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './views/app';

AOS.init({
  duration: 1000,
});

const app = new App({
  content: document.querySelector('#main-content'),
  isAdmin: true,
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
  const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

  allSideMenu.forEach((item) => {
    const li = item.parentElement;

    item.addEventListener('click', () => {
      allSideMenu.forEach((i) => {
        i.parentElement.classList.remove('active');
      });
      li.classList.add('active');
    });
  });

  const menuBar = document.querySelector('#content nav .bx.bx-menu');
  const sidebar = document.getElementById('sidebar');

  menuBar.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
  });

  const searchButton = document.querySelector('#content nav form .form-input button');
  const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
  const searchForm = document.querySelector('#content nav form');

  searchButton.addEventListener('click', (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      searchForm.classList.toggle('show');
      if (searchForm.classList.contains('show')) {
        searchButtonIcon.classList.replace('bx-search', 'bx-x');
      } else {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
      }
    }
  });

  if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
  } else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
  }

  window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
      searchButtonIcon.classList.replace('bx-x', 'bx-search');
      searchForm.classList.remove('show');
    }
  });

  const switchMode = document.getElementById('switch-mode');

  switchMode.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });

  // Initialize AOS if needed
  AOS.init({
    duration: 1000,
    // Other AOS configurations if needed
  });

  // Additional code or initialization specific to the admin page
});
