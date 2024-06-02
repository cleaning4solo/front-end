import { createAboutUsComponent, createStatsCounterComponent, createTeamComponent, createGalleryComponent } from "../templates/about-us";
import { galleryIsotope } from "../../components/gallery";

const About = {
  async render() {
    return `
      <section id="hero" class="hero">About Page</section>
      <section id="counter" class="counter">About Page</section>
      <section id="team" class="team">About Page</section>
      <section id="gallery" class="gallery">About Page</section>
    `;
  },

  async afterRender() {
    const mainContainer = document.querySelector(".hero");
    mainContainer.innerHTML = createAboutUsComponent();

    const countContainer = document.querySelector(".counter");
    countContainer.innerHTML = createStatsCounterComponent();

    const teamContainer = document.querySelector(".team");
    teamContainer.innerHTML = createTeamComponent();

    const galleryContainer = document.querySelector(".gallery");
    galleryContainer.innerHTML = createGalleryComponent();
    galleryIsotope();
  },
};

export default About;
