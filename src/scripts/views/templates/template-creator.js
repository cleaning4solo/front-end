import { formatDate, formatShortDate } from '../../components/date-formater';

const createHomePageComponent = () => `

<div class="container position-relative">
  <div class="row gy-5">
    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
      <h1>Mari Jaga Solo Kita Bersama <span class="primary">Cleaning4Solo</span></h1>
      <p>Menjadi wadah generasi muda yang memiliki wawasan dan kepedulian terhadap kelestarian lingkungan di wilayah Karesidenan Surakarta.</p>
      <div class="d-flex justify-content-center justify-content-lg-start button-wrapper">
        <a href="#/about" class="btn-get-started d-flex align-items-center justify-content-center">Tentang Kami</a>
        <a href="#/calculator" class="btn-calculator d-flex align-items-center justify-content-center"><i class="bi bi-calculator"></i><span>Kalkulator Sampah</span></a>
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
        <span data-purecounter-start="0" data-purecounter-end="90002323" data-purecounter-duration="1" class="purecounter fs-2"></span>
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
<div class="container section-title aos-init aos-animate" data-aos="fade-up">
<h1 class="calculator-title text-center">Kalkulator Sampah</h1>
<p class="text-center">Kalkulator Penghitung Sampah menghitung potensi pendapatan dari penjualan sampah dan estimasi pengurangan emisi karbon dari daur ulang.<br> 
Alat ini mendukung upaya pengelolaan sampah yang lebih berkelanjutan.</p>
</div>
<div class="container card custom-card1 shadow p-5">
<div class="row">
<div class="col-sm-12">
<h2 class="aktivitas-terbaru mb-3">Hitung</h2>
<div class="col-sm-12 card custom-card2 p-3">
<table class="table-calculator table-responsive">
<thead>
<tr>
<th class="text-center">Jenis</th>
<th class="text-center">Berat</th>
<th class="text-center">Asal Limbah</th>
<th class="text-center">Harga</th>
<th class="text-center">Emisi Karbon</th>
<th class="text-center">Aksi</th>
</tr>
</thead>
<tbody id="waste-table">
<td colspan="6" class="text-center no-data-message p-3">
<h5>Tidak ada data</h5>
</td>
</tbody>
</table>
<div class="row">
<div class="col-6 text-center">
<button class="btn btn1 btn-large" data-toggle="modal" data-target="#addWasteModal">Tambah Data</button>
</div>
<div class="col-6 text-center">
<button class="btn btn-success btn-large" id="submitWasteData">Submit</button>
</div>
</div>
</div>
<div class="mt-5">
<h2 class="aktivitas-terbaru">Aktivitas Terbaru</h2>
<div class="col-sm-12 card custom-card2 mt-3 p-3">
<table class="table-calculator">
<thead>
<tr>
<th class="text-center">Aktivitas</th>
<th class="text-center">Total Jual</th>
<th class="text-center">Total Emisi Karbon</th>
<th class="text-center">Rincian Aktivitas</th>
</tr>
</thead>
<tbody id="activity-table">
<td colspan="4" class="text-center no-data-message p-3">
<h5>Tidak ada data</h5>
</td>
</tbody>
</table>
</div>
</div>
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
<div class="form-group p-2">
<label for="wasteType">Jenis</label>
<input type="text" class="form-control" id="wasteType" required>
</div>
<div class="form-group p-2">
<label for="wasteWeight">Berat</label>
<input type="text" class="form-control" id="wasteWeight" required>
</div>
<div class="form-group p-2">
<label for="wasteSource">Asal Limbah</label>
<input type="text" class="form-control" id="wasteSource" required>
</div>
<div class="form-group p-2">
<label for="wastePrice">Harga</label>
<input type="text" class="form-control" id="wastePrice" disabled>
</div>
<div class="form-group p-2">
<label for="wasteEmissions">Emisi Karbon</label>
<input type="text" class="form-control" id="wasteEmissions" disabled>
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

const createEventComponent = (events) => `
<div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">

<div class="position-relative card px-0 shadow rounded-4 overflow-hidden bg-color text-color">
<div class="image-height-wrapper">
<img src="${events.image}" alt="${events.name}" class="img-fluid image-height">
</div>

<div class="d-flex justify-content-between my-2 px-3">
  <p class="d-flex flex-collumn gap-2 align-items-center fs-6"><i class="bi bi-geo-alt-fill text-danger"></i>${events.location.length > 12 ? `${events.location.slice(0, 12)}...` : events.location}</p>
  <p class="d-flex flex-collumn gap-2 align-items-center fs-6"><i class="bi bi-calendar"></i>${formatShortDate(events.date)}</p>
</div>
<div class="px-3">
  <h4>${events.name.length > 40 ? `${events.name.slice(0, 40)}...` : events.name}</a></h4>
  <p>${events.description.length > 70 ? `${events.description.slice(0, 70)}...` : events.description}</p>
</div>
<div class="mt-auto d-flex align-items-end justify-content-between p-3">
  <a href="#/event/${events._id}" class="m-2 button btn btn-outline-green px-3 text-color rounded-pill fw-bold">Detail</a>
  <button class="btn-join-event m-2 fw-bold button btn btn-green rounded-pill px-3" data-event-id="${events._id}">Join Volunteer</button>
  <button class="btn-delete-event m-2 fw-bold button btn btn-danger rounded-pill px-3" data-event-id="${events._id}" style="display:none;">Remove</button>
</div>
</div>

</div>
`;

const createLatestPostComponent = (blog) => `
<div class="col-xl-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
  <div class="position-relative card px-0 shadow rounded-4 overflow-hidden background-color d-flex flex-column">
    <div class="image-height-wrapper">
     <img src="${blog.image}" alt="" class="img-fluid image-height">
    </div>
    <div class="px-3 flex-grow-1">
      <h4 class="fw-bold fs-3 py-2 text-color">${blog.title}</h4>
      <p class="text-color fs-6">${blog.description.length > 100 ? `${blog.description.slice(0, 100)}...` : blog.description}</p>
    </div>
    <div class="mt-auto d-flex align-items-end justify-content-center p-3">
      <a href="#/detail/${blog._id}" class="m-2 fw-bold button-readmore rounded-pill">Read More</a>
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
const createJumbotronComponent = (jumbotron) => `
<div class="jumbotron d-flex align-items-center mb-5" style="background-image: url('${jumbotron.image}'); background-repeat: no-repeat; background-size: cover; min-height: 50vh;">
  <div class="container position-relative">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center text-white">
        <h2 class="fs-2 fw-bold text-uppercase my-3 tracking-wider">${jumbotron.title}</h2>
        <p>${jumbotron.description}</p>
      </div>
    </div>
  </div>
</div>
`;

const createHeaderBlogsDetailComponent = (blogs) => `
<div class="container position-relative" data-aos="fade-up">
  <div class="row d-flex justify-content-center">
    <div class="col-lg-6 text-center">
      <h2 class="fs-2 fw-bold text-capitalize my-3 text-color">${blogs.title}</h2>
    </div>
  </div>
</div>
`;

const createBodyBlogDetailComponent = (blogs) => `
<div class="img-container d-flex align-items-center justify-content-center" data-aos="fade-up">
  <img src="${blogs.image}" alt="${blogs.title}" class="img-fluid rounded">
</div>
<div class="d-flex justify-content-center my-5 gap-3 font-color fs-6">
<p class="mb-0"><span class="fw-bold">Created at:</span> ${formatShortDate(blogs.createdAt)}</p>
<p class="mb-0">-</p>
<p class="mb-0"><span class="fw-bold">Updated at:</span> ${formatShortDate(blogs.updatedAt)}</p>
</div>
<div class="content-detail-blog m-auto card bg-color text-color shadow p-3 rounded">
  <p class="fs-5 lh-lg">${blogs.description}</p>
</div>
`;

const createBreadCrumbComponent = (url) => `

<nav style="--bs-breadcrumb-divider: '>>';" aria-label="breadcrumb">
<ol class="breadcrumb">
  <li class="breadcrumb-item fw-bold"><a href="#/homepage">Home</a></li>
  <li class="breadcrumb-item active" aria-current="page">${url}</li>
</ol>
</nav>
`;

const createDetailEventComponent = (events) => `
<div class="container my-5">
<div class="section-header" data-aos="fade-up">
  <h2>${events.name}</h2>
  <p class="text-color">${events.description}</p>
  <div class="position-relative mt-4">
    <img src="${events.image}" class="img-fluid rounded-4 custom-img-event" alt="${events.name}" />
  </div>
</div>
<div class="row gy-4" data-aos="fade-up">
  <div class="col-lg-8">
    <iframe
    class="rounded shadow p-1 background-color"
    style="border:3px solid var(--text-color); width: 100%; height: 450px;"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
    src="${events.mapUrl}">
    </iframe>
  </div>
  <div class="col-lg-4">
    <div class="content ps-0 ps-lg-5 gap-3">
      <p class="d-flex fs-4 flex-collumn gap-2 align-items-center fs-6"><i class="bi bi-geo-alt-fill text-danger"></i>${events.location}</p>
      <p class="d-flex fs-4 flex-collumn gap-2 align-items-center fs-6"><i class="bi bi-calendar"></i>${events.date}</p>
    </div>
  </div>
</div>
</div>
`;

const loginFormTemplate = () => `
<div class="login-container" id="login-container">
<div class="form-container sign-in-container">
    <form action="#" class="form">
        <h1 class="title">Sign In</h1>
        <div class="social-container">
            <a href="#/homepage" class="icon"><i class='bx bxl-facebook'></i></a>
            <a href="#/homepage" class="icon"><i class='bx bxl-google'></i></a>
            <a href="#/homepage" class="icon"><i class='bx bxl-linkedin'></i></a>
            <a href="#/homepage" class="icon"><i class='bx bxl-github'></i></a>
        </div>
        <span class="description">or use your email for registration</span>
        <input type="email" placeholder="Email" class="input-field" id="login-email-input" required/>
        <input type="password" placeholder="Password" class="input-field" id="login-password-input" required/>
        <p class="confirmation-text text-danger text-center"></p>
        <button class="btn-login sign-in">Sign In</button>
    </form>
</div>
  `;

const signupFormTemplate = () => `
<div class="form-container sign-up-container">
<form action="#" class="form">
    <h1 class="title">Create Account</h1>
    <div class="social-container">
        <a href="#" class="icon"><i class='bx bxl-facebook'></i></a>
        <a href="#" class="icon"><i class='bx bxl-google'></i></a>
        <a href="#" class="icon"><i class='bx bxl-linkedin'></i></a>
        <a href="#" class="icon"><i class='bx bxl-github'></i></a>
    </div>
    <span class="description">or use your email for registration</span>
    <input type="text" placeholder="Username" class="input-field" id="signin-username-input"/>
    <input type="email" placeholder="Email" class="input-field" id="signin-email-input"/>
    <input type="password" placeholder="Password" class="input-field" id="signin-password-input"/>
    <button class="btn-login sign-up">Sign Up</button>
</form>
</div>
  `;

const overlayTemplate = () => `
<div class="overlay-container">
<div class="overlay">
    <div class="overlay-panel overlay-left">
        <h1 class="title">Welcome Back!</h1>
        <p class="description">To keep connected with us please login with your personal info</p>
        <button class="btn-login ghost" id="signIn-overlay">Sign In</button>
    </div>
    <div class="overlay-panel overlay-right">
        <h1 class="title">Hello, Friend!</h1>
        <p class="description">Enter your personal details and start journey with us</p>
        <button class="btn-login ghost" id="signUp-overlay">Sign Up</button>
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
  createJumbotronComponent,
  createBreadCrumbComponent,
  createBodyBlogDetailComponent,
  createHeaderBlogsDetailComponent,
  createDetailEventComponent,
  loginFormTemplate,
  signupFormTemplate,
  overlayTemplate,
};
