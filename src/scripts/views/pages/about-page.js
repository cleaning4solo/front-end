import PureCounter from '@srexi/purecounterjs';
import { createAboutUsComponent, createStatsCounterComponent, createTeamComponent } from '../templates/about-us';
import { galleryIsotope } from '../../components/gallery';

const About = {
  async render() {
    return `
      <section id="hero" class="hero"></section>
      <section id="counter" class="counter"></section>
      <section id="team" class="team"></section>
    `;
  },

  async afterRender() {
    const teamContainer = document.querySelector('.team');
    teamContainer.innerHTML = createTeamComponent();

    const counterContainer = document.querySelector('.counter');
    counterContainer.innerHTML = createStatsCounterComponent();

    const mainContainer = document.querySelector('.hero');
    mainContainer.innerHTML = createAboutUsComponent();
    new PureCounter();
    galleryIsotope();
  },
};

export default About;
