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

  const currentUrlObject = UrlParser.parseActiveUrlWithoutCombiner();
  const resource = currentUrlObject.resource ? `/${currentUrlObject.resource}` : '/';
  const id = currentUrlObject.id ? `/${currentUrlObject.id}` : '';
  const verb = currentUrlObject.verb ? `/${currentUrlObject.verb}` : '';
  const combinedUrl = `${resource}${id}${verb}`;

  console.log(`Updating scroll button href to: ${combinedUrl}`);
  scrollUpButton.setAttribute('href', `#${combinedUrl}`);

  scrollUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Use history.replaceState to update the URL without reloading the page
    history.replaceState(null, '', combinedUrl);
  });
};

export default createScrollUpButton;
