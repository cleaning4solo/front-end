import { createHomePageComponent } from '../components/component-creator';

const Homepage = {
  async render() {
    return `
      <section id="hero" class="hero"></section>
      `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('.hero');
    mainContainer.innerHTML = createHomePageComponent();
  },
};

export default Homepage;
