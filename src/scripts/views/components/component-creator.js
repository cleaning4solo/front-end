const createHomePageComponent = () => `

<div class="container position-relative">
  <div class="row gy-5">
    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
      <h2>Mari jaga Solo kita bersama <span>Sclean</span></h2>
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

export { createHomePageComponent, createCalculatorPageComponent };
