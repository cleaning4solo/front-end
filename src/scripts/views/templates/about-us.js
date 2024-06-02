const createAboutUsComponent = () => `
<section id="about" class="about">
  <div class="container" data-aos="fade-up">
    <div class="section-header">
      <h2>Tentang Kami</h2>
      <p>Setiap hari, 10 juta kg plastik berakhir di sungai dan alam lainnya. Hal ini membahayakan kehidupan laut, mengganggu ekosistem, dan mencemari siklus air global. Plastik terurai menjadi mikro dan nanoplastik yang berakhir di rantai makanan manusia, menyebabkan gangguan hormon, kemandulan, dan masalah kesehatan parah lainnya.</p>
      <div class="position-relative mt-4">
        <img src="/img/cover-vid.svg" class="img-fluid rounded-4 custom-img-up" alt="" />
        <a href="https://youtu.be/CW6lL4j-2Qo?si=v8tUTpxfVPY-x1Xx" class="glightbox play-btn"></a>
      </div>
    </div>
    <div class="row gy-4">
      <div class="col-lg-6">
        <h3>Sejarah</h3>
        <img src="/img/about.svg" class="img-fluid rounded-4 mb-4 custom-img" alt="" />
        <p>Setiap hari, 10 juta kg plastik berakhir di sungai dan alam lainnya. Hal ini membahayakan kehidupan laut, mengganggu ekosistem, dan mencemari siklus air global. Plastik terurai menjadi mikro dan nanoplastik yang berakhir di rantai makanan manusia, menyebabkan gangguan hormon, kemandulan, dan masalah kesehatan parah lainnya.</p>
      </div>
      <div class="col-lg-6">
        <div class="content ps-0 ps-lg-5">
          <p class="paragraph">Setiap hari, 10 juta kg plastik berakhir di sungai dan alam lainnya. Hal ini membahayakan kehidupan laut, mengganggu ekosistem, dan mencemari siklus air global. Plastik terurai menjadi mikro dan nanoplastik yang berakhir di rantai makanan manusia, menyebabkan gangguan hormon, kemandulan, dan masalah kesehatan parah lainnya.</p>
          <img src="/img/about.svg" class="img-fluid rounded-4 mb-4 custom-img" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
`;

const createStatsCounterComponent = () => `
<section id="stats-counter" class="stats-counter sections-bg">
  <div class="container" data-aos="fade-up">
    <div class="row gy-4 align-items-center">
      <div class="col-lg-6">
        <img src="/img/stats-img.svg" alt="" class="img-fluid" />
      </div>
      <div class="col-lg-6">
        <div class="stats-item d-flex align-items-center">
          <span data-purecounter-start="0" data-purecounter-end="19" data-purecounter-duration="1" class="purecounter"></span>
          <p><strong>Pembersihan Sungai</strong> yang pernah kami lakukan</p>
        </div>
        <div class="stats-item d-flex align-items-center">
          <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" class="purecounter"></span>
          <p><strong>Kunjungan ke Sekolah</strong> yang pernah kami lakukan</p>
        </div>
        <div class="stats-item d-flex align-items-center">
          <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1" class="purecounter"></span>
          <p><strong>Seminar</strong> yang pernah kami lakukan</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const createTeamComponent = () => `
<section id="team" class="team">
  <div class="container" data-aos="fade-up">
    <div class="section-header">
      <h2>Tim Kami</h2>
      <p>Berikut ini merupakan anggota tim Komunitas Solo Bersih</p>
    </div>
    <div class="row gy-4">
      <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
        <div class="member">
          <img src="/img/team/team-1.jpg" class="img-fluid" alt="" />
          <h4>Walter White</h4>
          <span>Web Development</span>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
        <div class="member">
          <img src="/img/team/team-2.jpg" class="img-fluid" alt="" />
          <h4>Sarah Jhinson</h4>
          <span>Marketing</span>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
        <div class="member">
          <img src="/img/team/team-3.jpg" class="img-fluid" alt="" />
          <h4>William Anderson</h4>
          <span>Content</span>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
        <div class="member">
          <img src="/img/team/team-4.jpg" class="img-fluid" alt="" />
          <h4>Amanda Jepson</h4>
          <span>Accountant</span>
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

const createGalleryComponent = () => `
<section id="gallery" class="gallery sections-bg">
  <div class="container" data-aos="fade-up">
    <div class="section-header">
      <h2>Gallery</h2>
      <p>Berikut ini merupakan dokumentasi Komunitas Solo Bersih</p>
    </div>
    <div class="gallery-isotope" data-gallery-filter="*" data-gallery-layout="masonry" data-gallery-sort="original-order" data-aos="fade-up" data-aos-delay="100">
      <div>
        <ul class="gallery-flters">
          <li data-filter="*" class="filter-active">Semua</li>
          <li data-filter=".filter-app">Bersih-bersih</li>
          <li data-filter=".filter-product">Seminar</li>
          <li data-filter=".filter-branding">Kunjungan</li>
          <li data-filter=".filter-books">Foto bersama</li>
        </ul>
      </div>
      <div class="row gy-4 gallery-container">
        <div class="col-xl-4 col-md-6 gallery-item filter-app">
          <div class="gallery-wrap">
            <a href="/img/gallery/app-1.jpg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">App 1</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-product">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Product 1</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-branding">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Branding 1</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-books">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Books 1</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-app">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">App 2</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-product">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Product 2</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-branding">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Branding 2</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-books">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Books 2</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-app">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">App 3</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-product">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Product 3</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-branding">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Branding 3</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-md-6 gallery-item filter-books">
          <div class="gallery-wrap">
            <a href="/img/gallery/bersih.svg" data-gallery="gallery-gallery-app" class="glightbox"><img src="/img/gallery/bersih.svg" class="img-fluid" alt="" /></a>
            <div class="gallery-info">
              <h4><a href="gallery-details.html" title="More Details">Books 3</a></h4>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export { createAboutUsComponent, createStatsCounterComponent, createTeamComponent, createGalleryComponent };
