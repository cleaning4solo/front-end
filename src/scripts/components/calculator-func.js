import Swal from 'sweetalert2';

const BASE_URL = process.env.BASE_URL || 'http://localhost:9000';

async function fetchWastes() {
  try {
    console.log('Fetching waste data...');
    const response = await fetch(`${BASE_URL}/wastes`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Fetched Data:', data); // Log the fetched data

    if (data && data.length > 0) {
      populateWasteTable(data);
    } else {
      displayNoDataMessage();
    }
  } catch (error) {
    console.error('Error fetching waste data:', error);
    displayNoDataMessage();
  }
}

function populateWasteTable(wastes) {
  const wasteTableBody = document.getElementById('waste-table');

  // Clear the existing rows
  wasteTableBody.innerHTML = '';

  if (!wasteTableBody) {
    displayNoDataMessage();
    return;
  }

  if (wastes.length === 0) {
    displayNoDataMessage();
    return;
  }

  wastes.forEach((waste) => {
    const row = document.createElement('tr');

    // Create and append each cell
    const jenisCell = document.createElement('td');
    jenisCell.textContent = waste.jenis;
    jenisCell.classList.add('text-center');
    row.appendChild(jenisCell);

    const beratCell = document.createElement('td');
    beratCell.textContent = waste.berat;
    beratCell.classList.add('text-center');
    row.appendChild(beratCell);

    const asalLimbahCell = document.createElement('td');
    asalLimbahCell.textContent = waste.asalLimbah;
    asalLimbahCell.classList.add('text-center');
    row.appendChild(asalLimbahCell);

    const hargaCell = document.createElement('td');
    hargaCell.textContent = waste.harga;
    hargaCell.classList.add('text-center');
    row.appendChild(hargaCell);

    const emisiKarbonCell = document.createElement('td');
    emisiKarbonCell.textContent = waste.emisiKarbon;
    emisiKarbonCell.classList.add('text-center');
    row.appendChild(emisiKarbonCell);

    // Add action cell
    const actionCell = document.createElement('td');
    actionCell.classList.add('text-center');
    actionCell.innerHTML = '<button class="btn btn-danger">Delete</button>'; // Example action button
    row.appendChild(actionCell);

    // Append row to table body
    wasteTableBody.appendChild(row);
  });

  // Add event listener to delete buttons
  const deleteButtons = document.querySelectorAll('#waste-table .btn-danger');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const row = button.closest('tr');
      const wasteId = row.id.split('-')[2];
      deleteWaste(wasteId);
    });
  });
}

function displayNoDataMessage() {
  const wasteTableBody = document.getElementById('waste-table');
  wasteTableBody.innerHTML = `
      <td colspan="6" class="text-center no-data-message p-3">
          <h5>Tidak ada data</h5>
      </td>`;
}

async function addWaste(waste) {
  try {
    const response = await fetch(`${BASE_URL}/wastes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(waste),
    });
    const result = await response.json();
    if (response.ok) {
      console.log('Waste created:', result);
      addWasteToTable(result.data);
    } else {
      console.error('Error creating waste:', result.message);
    }
  } catch (error) {
    console.error('Error creating waste:', error);
  }
}

async function deleteWaste(id) {
  try {
    if (!id) {
      console.error('Invalid waste ID:', id);
      return; // Exit function if ID is invalid
    }

    const response = await fetch(`${BASE_URL}/wastes/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    if (response.ok) {
      console.log('Waste deleted successfully');
      document.getElementById(`waste-row-${id}`).remove();
      if (document.getElementById('waste-table').rows.length === 1) {
        updateWasteTable([]);
      }
    } else {
      console.error('Error deleting waste:', result.message);
    }
  } catch (error) {
    console.error('Error deleting waste:', error);
  }
}

function updateWasteTable(wastes) {
  const wasteTable = document.getElementById('waste-table');
  if (!wasteTable) {
    console.error('Waste table element not found');
    return;
  }
  wasteTable.innerHTML = Array.isArray(wastes) && wastes.length > 0
    ? wastes.map((waste) => `
      <tr id="waste-row-${waste._id}">
        <td class="text-center p-2">${waste.jenis}</td>
        <td class="text-center p-2">${waste.berat}</td>
        <td class="text-center p-2">${waste.asalLimbah}</td>
        <td class="text-center p-2">${waste.harga}</td>
        <td class="text-center p-2">${waste.emisiKarbon}</td>
        <td class="text-center p-2 removerow">
          <button class="btn btn-danger" onclick="deleteWaste('${waste._id}')">Remove</button>
        </td>
      </tr>
    `).join('')
    : `
      <td colspan="6" class="text-center no-data-message p-3">
        <h5>Tidak ada data</h5>
      </td>
    `;
}

function addWasteToTable(waste) {
  const wasteTable = document.getElementById('waste-table');
  wasteTable.insertAdjacentHTML('beforeend', `
    <tr id="waste-row-${waste._id}">
      <td class="text-center p-2">${waste.jenis}</td>
      <td class="text-center p-2">${waste.berat}</td>
      <td class="text-center p-2">${waste.asalLimbah}</td>
      <td class="text-center p-2">${waste.harga}</td>
      <td class="text-center p-2">${waste.emisiKarbon}</td>
      <td class="text-center p-2 removerow">
        <button class="btn btn-danger" onclick="deleteWaste('${waste._id}')">Remove</button>
      </td>
    </tr>
  `);
}

async function submitAllWastes() {
  try {
    const response = await fetch(`${BASE_URL}/wastes/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('All wastes submitted successfully');
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'All wastes have been submitted successfully.',
        confirmButtonText: 'OK',
      });
      updateWasteTable([]);
    } else {
      const result = await response.json();
      console.error('Error submitting wastes:', result.message);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to submit wastes.',
        confirmButtonText: 'OK',
      });
    }
  } catch (error) {
    console.error('Error submitting wastes:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An unexpected error occurred.',
      confirmButtonText: 'OK',
    });
  }
}

function initializeEventListeners() {
  const submitButton = document.getElementById('submitWasteData');

  document.addEventListener('submit', async (event) => {
    if (event.target && event.target.id === 'addWasteForm') {
      event.preventDefault();
      const wasteType = document.getElementById('wasteType').value;
      const wasteWeight = parseInt(document.getElementById('wasteWeight').value, 10);
      const wasteSource = document.getElementById('wasteSource').value;
      const wastePrice = parseInt(document.getElementById('wastePrice').value, 10);
      const wasteEmissions = parseInt(document.getElementById('wasteEmissions').value, 10);

      const newWaste = {
        jenis: wasteType,
        berat: wasteWeight,
        asalLimbah: wasteSource,
        harga: wastePrice,
        emisiKarbon: wasteEmissions,
        status: 'drafted',
      };

      await addWaste(newWaste);

      event.target.reset();
      $('#addWasteModal').modal('hide');
      submitButton.disabled = false;
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('btn-danger')) {
      const row = event.target.closest('tr');
      const wasteId = row.id.split('-')[2];
      deleteWaste(wasteId);
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'submitWasteData') {
      const wasteTable = document.getElementById('waste-table');
      const noDataMessage = document.querySelector('#waste-table td');
      if (!wasteTable || (noDataMessage && noDataMessage.textContent.trim() === 'Tidak ada data')) {
        submitButton.disabled = true;
        Swal.fire({
          icon: 'warning',
          title: 'Tidak Ada Data',
          text: 'Mohon tambahkan data terlebih dahulu.',
          confirmButtonText: 'OK',
        });
        return;
      }
      submitAllWastes();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
  fetchWastes();
});

export { initializeEventListeners };
