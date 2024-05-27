import PureCounter from '@srexi/purecounterjs';
import { CreateCounterComponent, createHomePageComponent } from '../components/component-creator';

const Homepage = {
  async render() {
    return `
      <section id="hero" class="hero"></section>
      <section id="stats-counter" class="stats-counter"></section>
      `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('.hero');
    const counterContainer = document.querySelector('.stats-counter');
    mainContainer.innerHTML = createHomePageComponent();
    counterContainer.innerHTML = CreateCounterComponent();

    new PureCounter();
  },
};

export default Homepage;
