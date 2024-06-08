import Swal from 'sweetalert2';

async function fetchWastes() {
  try {
    const response = await fetch('/wastes');
    const result = await response.json();
    if (response.ok) {
      const { wastes } = result;
      updateWasteTable(wastes);
    } else {
      console.error('Failed to fetch wastes:', result.message);
    }
  } catch (error) {
    console.error('Error fetching wastes:', error);
  }
}

async function addWaste(waste) {
  try {
    const response = await fetch('/wastes', {
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
    const response = await fetch(`/wastes/${id}`, {
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
  wasteTable.innerHTML = wastes.length
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
    const response = await fetch('/wastes/submit', {
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
      const wasteWeight = document.getElementById('wasteWeight').value;
      const wasteSource = document.getElementById('wasteSource').value;

      const newWaste = {
        jenis: wasteType,
        berat: wasteWeight,
        asalLimbah: wasteSource,
        harga: 0, // Assuming initial price is 0, or you can calculate based on your logic
        emisiKarbon: 0, // Assuming initial emissions are 0, or you can calculate based on your logic
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
