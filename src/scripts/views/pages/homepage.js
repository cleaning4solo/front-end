import PureCounter from '@srexi/purecounterjs';
import { CreateCounterComponent, createHomePageComponent, createVissionMissionComponent } from '../components/component-creator';

const Homepage = {
  async render() {
    return `
      <section id="hero" class="hero"></section>
      <section id="vission" class="vission my-lg-5 pt-lg-4"></section>
      <section id="stats-counter" class="stats-counter"></section>
      `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('.hero');
    const counterContainer = document.querySelector('.stats-counter');
    const vissionContainer = document.querySelector('.vission');
    mainContainer.innerHTML = createHomePageComponent();
    counterContainer.innerHTML = CreateCounterComponent();
    vissionContainer.innerHTML = createVissionMissionComponent();

    new PureCounter();
  },
};

export default Homepage;
