/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import PureCounter from '@srexi/purecounterjs';
import {
  CreateCounterComponent, createEventComponent, createHomePageComponent, createVissionMissionComponent,
} from '../components/component-creator';

const Homepage = {
  async render() {
    return `
      <section id="hero" class="hero"></section>
      <section id="vission" class="vission my-lg-5 pt-lg-4"></section>
      <section id="future-events" class="py-3 future-events">
        <div class="container">
          <h2 class="fs-1 fw-bold text-center my-4" data-aos="fade-up">Our Events</h2>
          <div class="row gy-4 event-item justify-content-center pb-5 my-4">
          </div>
        </div>
      </section>
      <section id="stats-counter" class="stats-counter"></section>
      `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('.hero');
    const counterContainer = document.querySelector('.stats-counter');
    const vissionContainer = document.querySelector('.vission');
    const eventContainer = document.querySelector('.event-item');

    mainContainer.innerHTML = createHomePageComponent();
    counterContainer.innerHTML = CreateCounterComponent();
    vissionContainer.innerHTML = createVissionMissionComponent();
    for (let i = 0; i < 3; i++) {
      eventContainer.innerHTML += createEventComponent();
    }

    new PureCounter();
  },
};

export default Homepage;
