/* eslint-disable no-plusplus */
import { createBreadCrumbComponent, createHeaderBlogsComponent, createLatestPostComponent } from '../templates/template-creator';

const Blog = {
  async render() {
    return `
    <div class="jumbotron d-flex align-items-center mb-5" style="background-image: url('img/jumbotron.jpg'); min-height: 50vh;"></div>
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
    const jumbotronContainer = document.querySelector('.jumbotron');
    const breadcrumbContainer = document.querySelector('.breadcrumb');
    const postContainer = document.querySelector('.posts-list');

    jumbotronContainer.innerHTML = createHeaderBlogsComponent();
    breadcrumbContainer.innerHTML = createBreadCrumbComponent();
    for (let i = 0; i < 12; i++) {
      postContainer.innerHTML += createLatestPostComponent();
    }
  },
};

export default Blog;
