const createHomePageComponent = () => `

<div class="container position-relative">
  <div class="row gy-5">
    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
      <h2>Mari Jaga Solo Kita Bersama <span>Cleaning4Solo</span></h2>
      <p>Menjadi wadah generasi muda yang memiliki wawasan dan kepedulian terhadap kelestarian lingkungan di wilayah Karesidenan Surakarta.</p>
      <div class="d-flex justify-content-center justify-content-lg-start">
        <a href="#about" class="btn-get-started">Tentang Kami</a>
        <a href="#" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-calculator"></i><span>Kalkulator Sampah</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
      <img src="img/hero-img4.svg" class="img-fluid animation" alt="" />
    </div>
  </div>
</div>

`;  

const CreateCounterComponent = () => `
<div class="container" data-aos="fade-up">
  <h2 class="text-center fs-1 fw-bold">Our Impact</h2>

  <div class="d-flex justify-content-center gap-5">
      <div class="stats-item py-4 text-center d-flex flex-column gap-1 px-3">
        <div class="d-flex">
          <span data-purecounter-start="0" data-purecounter-end="12000" data-purecounter-duration="1" class="purecounter"></span>
          <p class="fs-6">KG</p>
        </div>
        <p>Sampah Plastik</p>
      </div>

      <div class="stats-item py-4 text-center d-flex flex-column gap-1 px-3">
        <div class="d-flex">
          <span data-purecounter-start="0" data-purecounter-end="23000" data-purecounter-duration="1" class="purecounter"></span>
          <p class="fs-6">KG</p>
        </div>
        <p>Limbah</p>
      </div>

      <div class="stats-item py-4 mb-5 text-center d-flex flex-column gap-1 px-3">
        <span data-purecounter-start="0" data-purecounter-end="120" data-purecounter-duration="1" class="purecounter"></span>
        <p>Desa Dibersihkan</p>
      </div>

      <div  class="stats-item py-4 text-center d-flex flex-column gap-1 px-3">
        <div class="d-flex">
          <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" class="purecounter"></span>
          <p class="fs-6">+</p>
        </div>
        <p>Event</p>
      </div>
  </div>

</div>
`

export { createHomePageComponent, CreateCounterComponent };
