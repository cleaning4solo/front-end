const createHomePageComponent = () => `

<div class="container position-relative">
  <div class="row gy-5">
    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
      <h1>Mari Jaga Solo Kita Bersama <span class="primary">Cleaning4Solo</span></h1>
      <p>Menjadi wadah generasi muda yang memiliki wawasan dan kepedulian terhadap kelestarian lingkungan di wilayah Karesidenan Surakarta.</p>
      <div class="d-flex justify-content-center justify-content-lg-start button-wrapper">
        <a href="#/about" class="btn-get-started d-flex align-items-center justify-content-center">Tentang Kami</a>
        <a href="#/calculator" class="btn-watch-video d-flex align-items-center justify-content-center"><i class="bi bi-calculator"></i><span>Kalkulator Sampah</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
      <img src="img/hero-img4.svg" class="img-fluid animation" alt="" />
    </div>
  </div>
</div>
`;

const CreateCounterComponent = () => `
<div class="container" data-aos="zoom-in">
  <h2 class="text-center fs-1 fw-bold">Our Impact</h2>

  <div class="row justify-content-center mb-5">
    <div class="col-12 col-md-6 col-lg-2 py-1 text-center d-flex flex-column">
      <div class="d-flex justify-content-center">
        <span data-purecounter-start="0" data-purecounter-end="1223242" data-purecounter-duration="1" class="purecounter fs-2"></span>
        <p class="fs-6">KG</p>
      </div>
      <p>Sampah Plastik</p>
    </div>

    <div class="col-12 col-md-6 col-lg-2 py-1 text-center d-flex flex-column">
      <div class="d-flex justify-content-center">
        <span data-purecounter-start="0" data-purecounter-end="23000" data-purecounter-duration="1" class="purecounter fs-2"></span>
        <p class="fs-6">KG</p>
      </div>
      <p>Limbah</p>
    </div>

    <div class="col-12 col-md-6 col-lg-2 py-1 text-center d-flex flex-column">
        <span data-purecounter-start="0" data-purecounter-end="120" data-purecounter-duration="1" class="purecounter fs-2"></span>
        <p>Desa Dibersihkan</p>
    </div>

    <div class="col-12 col-md-6 col-lg-2 py-1 text-center d-flex flex-column">
      <div class="d-flex justify-content-center">
        <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" class="purecounter fs-2"></span>
        <p class="fs-6">+</p>
      </div>
      <p>Event</p>
    </div>
  </div>
</div>
`;

const createVissionMissionComponent = () => `
<div class="container overflow-x-hidden">
<div class="row align-items-center my-5 py-4">
  <div class="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center align-items-center" data-aos="fade-right">
    <img src="img/vission.svg" alt="Vision Image" class="img-fluid">
  </div>
  <div class="col-lg-6 px-5" data-aos="fade-left">
    <h2 class="fw-bold mb-4">Vision</h2>
    <p>Setiap hari, 10 juta kg plastik berakhir di sungai dan alam lainnya. Hal ini membahayakan kehidupan laut, mengganggu ekosistem, dan mencemari siklus air global. Plastik terurai menjadi mikro dan nanoplastik yang berakhir di rantai makanan manusia, menyebabkan gangguan hormon, kemandulan, dan masalah kesehatan parah lainnya.</p>
  </div>
</div>
<div class="row align-items-center my-5 py-4">
  <div class="col-lg-6 px-5 order-2 order-lg-1" data-aos="fade-right">
    <h2 class="fw-bold mb-4">Mission</h2>
    <p>Setiap hari, 10 juta kg plastik berakhir di sungai dan alam lainnya. Hal ini membahayakan kehidupan laut, mengganggu ekosistem, dan mencemari siklus air global. Plastik terurai menjadi mikro dan nanoplastik yang berakhir di rantai makanan manusia, menyebabkan gangguan hormon, kemandulan, dan masalah kesehatan parah lainnya.</p>
  </div>
  <div class="col-lg-6 mb-4 mb-lg-0 order-1 order-lg-2 d-flex justify-content-center align-items-center" data-aos="fade-left">
    <img src="img/mission.svg" alt="Mission Image" class="img-fluid">
  </div>
</div>
</div>
`;

const createCalculatorPageComponent = () => `
<div class="container position-relative">
<h2 class="aktivitas-terbaru">Hitung</h2>
<div class="container card p-3">
<table class="table table-bordered">
<thead>
<tr>
<th class="text-center">Icon</th>
<th class="text-center">Nama</th>
<th class="text-center">Berat</th>
<th class="text-center">Jenis</th>
<th class="text-center">Harga</th>
<th class="text-center">Asal Limbah</th>
<th class="text-center">Emisi Karbon</th>
</tr>
</thead>
<tbody id="waste-table">
<tr>
<td class="text-center"><div class="ellipse"></div></td>
<td class="text-center">Botol Plastik</td>
<td class="text-center">4 kg</td>
<td class="text-center">Plastik</td>
<td class="text-center">5.000/Kg</td>
<td class="text-center">Industri</td>
<td class="text-center">1.9 kg CO₂ per kg</td>
</tr>
</tbody>
</table>
<div class="row">
<div class="col-6 text-center">
<button class="btn btn-primary btn-large" data-toggle="modal" data-target="#addWasteModal">+</button>
</div>
<div class="col-6 text-center">
<button class="btn btn-success btn-large" id="submitWasteData">Submit</button>
</div>
</div>
</div>
<div class="mt-5">
<h2 class="aktivitas-terbaru">Aktivitas Terbaru</h2>
<div class="container card mt-3 p-3">
<table class="table table-bordered">
<thead>
<tr>
<th class="text-center">Icon</th>
<th class="text-center">Aktivitas</th>
<th class="text-center">Total Jual</th>
<th class="text-center">Total Emisi Karbon</th>
<th class="text-center">Rincian Aktivitas</th>
</tr>
</thead>
<tbody id="activity-table">
<tr>
<td class="text-center"><div class="ellipse"></div></td>
<td class="text-center">Aktivitas 1</td>
<td class="text-center">Rp24.000</td>
<td class="text-center">31.7 kg CO₂</td>
<td class="text-center"><button class="btn btn-success btn-sm">Selengkapnya</button></td>
</tr>
</tbody>
</table>
</div>
</div>

<!-- Modal for adding new waste data -->
<div class="modal fade" id="addWasteModal" tabindex="-1" role="dialog" aria-labelledby="addWasteModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="addWasteModalLabel">Add New Waste Data</h5>
<span class="close" data-dismiss="modal" aria-label="Close" style="position: absolute; top: 1; right: 0; padding: 0.5rem; cursor: pointer;">
<span aria-hidden="true" style="font-size: 1.5rem;">&times;</span>
</span>
</div>
<div class="modal-body">
<form id="addWasteForm">
<div class="form-group">
<label for="wasteName">Nama</label>
<input type="text" class="form-control" id="wasteName" required>
</div>
<div class="form-group">
<label for="wasteWeight">Berat</label>
<input type="text" class="form-control" id="wasteWeight" required>
</div>
<div class="form-group">
<label for="wasteType">Jenis</label>
<input type="text" class="form-control" id="wasteType" required>
</div>
<div class="form-group">
<label for="wastePrice">Harga</label>
<input type="text" class="form-control" id="wastePrice" required>
</div>
<div class="form-group">
<label for="wasteSource">Asal Limbah</label>
<input type="text" class="form-control" id="wasteSource" required>
</div>
<div class="form-group">
<label for="wasteEmissions">Emisi Karbon</label>
<input type="text" class="form-control" id="wasteEmissions" required>
</div>
<br>
<div>
<button type="submit" class="btn btn-primary">Add</button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
`;

const createEventComponent = () => `
<div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">

<div class="position-relative card px-0 shadow rounded-4 overflow-hidden bg-color text-color">

  <img src="./img/events.svg" alt="" class="img-fluid object-fit-cover ">

<div class="d-flex justify-content-between my-2 px-3">
  <p class="d-flex flex-collumn gap-2 align-items-center fs-6"><i class="bi bi-geo-alt-fill text-danger"></i>Paris, France</p>
  <p class="d-flex flex-collumn gap-2 align-items-center fs-6"><i class="bi bi-calendar"></i>24 may 2002</p>
</div>
<div class="px-3">
  <h4>Lorem Ipsum</a></h4>
  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
</div>
<div class="d-flex align-item-center justify-content-end p-3">
  <a href="#" class="m-2 fw-bold px-4 button btn btn-success rounded-pill">Join Volunteer</a>
</div>
</div>

</div>
`;

const createLatestPostComponent = () => `
<div class="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
<div class="position-relative card px-0 shadow rounded-4 overflow-hidden background-primary">
  <img src="./img/post.svg" alt="" class="img-fluid object-fit-cover ">
<div class="px-3">
  <h4 class="fw-bold fs-2 py-2 text-darkblue">Setiap hari, 10 juta kg plastik berakhir di sungai dan alam lainnya.</h4>
  <p>Hal ini membahayakan kehidupan laut, mengganggu ekosistem, dan mencemari siklus air global. Plastik terurai menjadi mikro dan nanoplastik yang berakhir di rantai makanan manusia, menyebabkan gangguan hormon, kemandulan, dan masalah kesehatan parah lainnya........</p>
</div>
<div class="d-flex align-item-center justify-content-center p-3">
  <a href="#" class="m-2 fw-bold  button-readmore rounded-pill">Read More</a>
</div>
</div> 
</div>
`;

const createLocationComponent = () => `
<div class="container">
  <h2 class="fs-1 fw-bold text-center my-4" data-aos="fade-up">Our Location</h2>
  <div class="my-4 py-2" data-aos="fade-up">
    <iframe
    class="rounded shadow p-1 background-color"
    style="border:3px solid var(--text-color); width: 100%; height: 450px;"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.828534020206!2d107.61540147756932!3d-6.895730942706618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7a55a715555%3A0xb8bb411d2516aad6!2sDicoding%20Academy!5e0!3m2!1sid!2sid!4v1716968750724!5m2!1sid!2sid">
  </iframe>
  </div>
</div>
`;

const createPartnerComponent = () => `
<div class="container" data-aos="zoom-in">
<div class="swiper">
  <div class="swiper-wrapper align-items-center  py-5">
    <div class="swiper-slide d-flex justify-content-center"><img src="img/icon1.png" class="img-fluid" alt=""></div>
    <div class="swiper-slide d-flex justify-content-center"><img src="img/icon2.png" class="img-fluid" alt=""></div>
    <div class="swiper-slide d-flex justify-content-center"><img src="img/icon2.png" class="img-fluid" alt=""></div>
    <div class="swiper-slide d-flex justify-content-center"><img src="img/icon2.png" class="img-fluid" alt=""></div>
    <div class="swiper-slide d-flex justify-content-center"><img src="img/icon3.png" class="img-fluid" alt=""></div>
    <div class="swiper-slide d-flex justify-content-center"><img src="img/icon4.png" class="img-fluid" alt=""></div>
    <div class="swiper-slide d-flex justify-content-center"><img src="img/icon5.png" class="img-fluid" alt=""></div>
    <div class="swiper-slide d-flex justify-content-center"><img src="img/icon6.png" class="img-fluid" alt=""></div>
  </div>
</div>
</div>
`;

export {
  createHomePageComponent,
  CreateCounterComponent,
  createVissionMissionComponent,
  createCalculatorPageComponent,
  createEventComponent,
  createLatestPostComponent,
  createLocationComponent,
  createPartnerComponent,
};
