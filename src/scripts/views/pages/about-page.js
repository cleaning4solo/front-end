import { createHomePageComponent } from '../components/component-creator';

const About = {
  async render() {
    return `
      <section id="hero" class="hero">About Page</section>
      `;
  },

  async afterRender() {
    // code here
  },
};

export default About;
