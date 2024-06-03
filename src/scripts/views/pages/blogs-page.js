/* eslint-disable no-plusplus */
import Cleaning4SoloAPI from '../../data/cleaning4soloAPI';
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
    const data = await Cleaning4SoloAPI.blogAPI();
    const { blogs } = data;
    const jumbotronContainer = document.querySelector('.jumbotron');
    const breadcrumbContainer = document.querySelector('.breadcrumb');
    const postContainer = document.querySelector('.posts-list');

    jumbotronContainer.innerHTML = createHeaderBlogsComponent();
    breadcrumbContainer.innerHTML = createBreadCrumbComponent();

    if (blogs.length === 0) {
      postContainer.innerHTML = '<p class="text-center fw-bold fs-2">Belum ada blog</p>';
    } else {
      blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      blogs.forEach((post) => {
        postContainer.innerHTML += createLatestPostComponent(post);
      });
    }
  },
};

export default Blog;
