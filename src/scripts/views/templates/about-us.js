const createAboutUsComponent = () => `
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
`;

const createStatsCounterComponent = () => `

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
`;

const createTeamComponent = () => `
  <div class="container py-5" data-aos="fade-up">
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
`;

const createGalleryComponent = (picture) => `
  <div class="col-xl-4 col-md-6 gallery-item ${picture.category}">
    <div class="gallery-wrap">
      <a href="${picture.imageUrl}" data-gallery="gallery-gallery-app" class="glightbox">
        <img src="https://i.ibb.co.com/BwC7Y79/image.png" data-src="${picture.imageUrl}" class="img-fluid h-100 lazyload" alt="${picture.title}" />
      </a>
    </div>
  </div>
`;

export {
  createAboutUsComponent, createStatsCounterComponent, createTeamComponent, createGalleryComponent,
};
