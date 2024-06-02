import UrlParser from '../routes/url-parser';

const createScrollUpButton = () => {
  const scrollUpButton = document.getElementById('scrollUpButton');

  window.onscroll = function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpButton.classList.add('active');
    } else {
      scrollUpButton.classList.remove('active');
    }
  };

  const currentUrl = UrlParser.parseActiveUrlWithCombiner();
  scrollUpButton.setAttribute('href', `#${currentUrl}`);
  scrollUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.location.hash = currentUrl;
  });
};

export default createScrollUpButton;
