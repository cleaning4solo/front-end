import PureCounter from "@srexi/purecounterjs";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { createAboutUsComponent, createGalleryComponent, createStatsCounterComponent, createTeamComponent } from "../templates/about-us";
import { galleryIsotope } from "../../components/gallery";

const About = {
  async render() {
    return `
      <section id="hero" class="hero"></section>
      <section id="counter" class="counter"></section>
      <section id="team" class="team"></section>
      <section id="gallery" class="gallery"></section>
    `;
  },

  // cek
  async afterRender() {
    const teamContainer = document.querySelector(".team");
    teamContainer.innerHTML = createTeamComponent();

    const counterContainer = document.querySelector(".counter");
    counterContainer.innerHTML = createStatsCounterComponent();

    const mainContainer = document.querySelector(".hero");
    mainContainer.innerHTML = createAboutUsComponent();

    const galleryContainer = document.querySelector(".gallery");
    galleryContainer.innerHTML = createGalleryComponent();
    new PureCounter();
    galleryIsotope();
    const glightbox = GLightbox({
      selector: ".glightbox",
    });
  },
};

export default About;
