/* eslint-disable no-plusplus */
import Cleaning4SoloAPI from '../../data/cleaning4soloAPI';
import {
  createBreadCrumbComponent, createEventComponent, createJumbotronComponent,
} from '../templates/template-creator';
import jumbotronData from '../../data/jumbotron.json';

const Event = {
  async render() {
    return `
    <section class="header-container"></section>
    <div class="container breadcrumb"></div>
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">
        <div class="row gy-4 my-5 posts-list"></div>
        <nav aria-label="Page navigation example my-5">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">...</a></li>
            <li class="page-item"><a class="page-link" href="#">100</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const data = await Cleaning4SoloAPI.eventAPI();
    const url = 'events';
    const { events } = data;
    const jumbotronContainer = document.querySelector('.header-container');
    const breadcrumbContainer = document.querySelector('.breadcrumb');
    const eventContainer = document.querySelector('.posts-list');

    jumbotronContainer.innerHTML = createJumbotronComponent(jumbotronData.eventJumbotron);
    breadcrumbContainer.innerHTML = createBreadCrumbComponent(url);

    if (events.length === 0) {
      eventContainer.innerHTML = '<p class="text-center fw-bold fs-2">Belum ada Event</p>';
    } else {
      events.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      events.forEach((event) => {
        eventContainer.innerHTML += createEventComponent(event);
      });
    }
  },
};

export default Event;
