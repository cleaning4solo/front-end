import Swal from 'sweetalert2';

async function addActivity(aktivitas, totalJual, totalEmisiKarbon) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/activities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ aktivitas, totalJual, totalEmisiKarbon }),
    });
    const data = await response.json();
    console.log('Activity added to server:', data);
    document.dispatchEvent(new CustomEvent('activityAdded', { detail: data }));
    return true;
  } catch (error) {
    console.error('Error adding activity to server:', error);
    return false;
  }
}

async function addWasteToActivity(activityId, jenis, berat, asalLimbah, harga, emisiKarbon) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/activities/${activityId}/waste`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jenis,
        berat,
        asalLimbah,
        harga,
        emisiKarbon,
        activityId,
      }),
    });
    const data = await response.json();
    console.log('Waste added to server:', data);
    document.dispatchEvent(new CustomEvent('wasteAdded', { detail: data }));
    return true;
  } catch (error) {
    console.error('Error adding waste to server:', error);
    return false;
  }
}

export function initializeEventListeners() {
  setupActivityFormSubmission();
  setupWasteFormSubmission();
  loadActivities();
}

function setupActivityFormSubmission() {
  const form = document.getElementById('addActivityForm');
  const activityNameInput = document.querySelector('#activityName');
  const errorMessage = document.querySelector('#activityErrorMessage');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
      const aktivitas = activityNameInput.value;
      const isSuccess = await addActivity(aktivitas);
      if (isSuccess) {
        form.reset();
        $('#addActivityModal').modal('hide');
        loadActivities();
      } else {
        errorMessage.textContent = 'Terjadi kesalahan saat menambahkan aktivitas.';
      }
    } else {
      errorMessage.textContent = 'Harap isi semua bidang dengan benar.';
    }
  });
}

function setupWasteFormSubmission() {
  const form = document.getElementById('addWasteForm');
  const activitySelect = document.querySelector('#activitySelect');
  const typeInput = document.querySelector('#wasteType');
  const weightInput = document.querySelector('#wasteWeight');
  const sourceInput = document.querySelector('#wasteSource');
  const priceInput = document.querySelector('#wastePrice');
  const emissionsInput = document.querySelector('#wasteEmissions');
  const errorMessage = document.querySelector('#wasteErrorMessage');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
      const activityId = activitySelect.value;
      const type = typeInput.value;
      const weight = weightInput.value;
      const source = sourceInput.value;
      const price = priceInput.value;
      const emissions = emissionsInput.value;
      const isSuccess = await addWasteToActivity(activityId, type, weight, source, price, emissions);
      if (isSuccess) {
        form.reset();
        $('#addWasteModal').modal('hide');
      } else {
        errorMessage.textContent = 'Terjadi kesalahan saat menambahkan data limbah.';
      }
    } else {
      errorMessage.textContent = 'Harap isi semua bidang dengan benar.';
    }
  });
}

async function loadActivities() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/activities`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const activities = await response.json();
    const activitySelect = document.querySelector('#activitySelect');
    activitySelect.innerHTML = activities.map((activity) => `<option value="${activity._id}">${activity.aktivitas}</option>`).join('');
  } catch (error) {
    console.error('Error loading activities:', error);
  }
}

function fetchActivityById(activityId) {
  fetch(`${process.env.BASE_URL}/activities/${activityId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((activity) => {
      appendWastesToTable(activity.wasteIds);
    })
    .catch((error) => {
      console.error('Error fetching activity:', error);
    });
}

function appendWastesToTable(wasteIds) {
  const tableBody = document.getElementById('waste-table');
  wasteIds.forEach((wasteId) => {
    fetch(`${process.env.BASE_URL}/wastes/${wasteId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((waste) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${waste.jenis}</td>
          <td>${waste.berat}</td>
          <td>${waste.asalLimbah}</td>
          <td>${waste.harga}</td>
          <td>${waste.emisiKarbon}</td>
        `;
        tableBody.appendChild(row);
      })
      .catch((error) => {
        console.error('Error fetching waste:', error);
      });
  });
}

// Call fetchActivityById with the desired activity ID
const activityId = '66672b7a242b2735af3606c7'; // Replace with the actual activity ID
fetchActivityById(activityId);
