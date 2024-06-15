import { createSidebarComponent, createContentComponent } from '../templates/template-admin';

const Admin = {
  async render() {
    return `
      
      <section id="sidebar"></section>
      <section id="content"></section>
    `;
  },

  // <section id="hero" class="hero">INI ADALAH ADMIN PAGE</section>
  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const sidebarContainer = document.querySelector('.sidebar');
    sidebarContainer.innerHTML = createSidebarComponent();

    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = createContentComponent();
  },

};

export default Admin;

