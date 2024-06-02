import { createAboutUsComponent } from "../templates/about-us";
import { galleryIsotope } from "../../components/gallery";

const About = {
  async render() {
    return `
      <section id="hero" class="hero">About Page</section>
    `;
  },

  async afterRender() {
    const mainContainer = document.querySelector(".hero");
    mainContainer.innerHTML = createAboutUsComponent();
    galleryIsotope();
  },
};

export default About;
