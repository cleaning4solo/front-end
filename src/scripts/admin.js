/* eslint-disable func-names */
import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../public/css/admin.css';
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

  const menuBar = document.querySelector('.sidebar-controller');
  const sidebar = document.getElementById('sidebar');

  const sidebarState = localStorage.getItem('sidebarState');

  if (sidebarState === 'hide') {
    sidebar.classList.add('hide');
    menuBar.classList.replace('bxs-chevron-left', 'bxs-chevron-right');
  } else {
    sidebar.classList.remove('hide');
    menuBar.classList.replace('bxs-chevron-right', 'bxs-chevron-left');
  }

  menuBar.addEventListener('click', () => {
    sidebar.classList.toggle('hide');

    if (sidebar.classList.contains('hide')) {
      menuBar.classList.replace('bxs-chevron-left', 'bxs-chevron-right');
      localStorage.setItem('sidebarState', 'hide');
    } else {
      menuBar.classList.replace('bxs-chevron-right', 'bxs-chevron-left');
      localStorage.setItem('sidebarState', 'show');
    }
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

  const isAdminDarkMode = localStorage.getItem('admin-darkmode') === 'true';

  if (isAdminDarkMode) {
    document.body.classList.add('dark');
    switchMode.checked = true;
  } else {
    document.body.classList.remove('dark');
    switchMode.checked = false;
  }

  switchMode.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('admin-darkmode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('admin-darkmode', 'false');
    }
  });

  // Initialize AOS if needed
  AOS.init({
    duration: 1000,
    // Other AOS configurations if needed
  });

  // Additional code or initialization specific to the admin page
});
