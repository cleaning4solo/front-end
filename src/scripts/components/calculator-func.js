function initializeEventListeners() {
  // Event delegation for form submission
  document.addEventListener('submit', (event) => {
    if (event.target && event.target.id === 'addWasteForm') {
      event.preventDefault();

      const name = document.getElementById('wasteName').value;
      const weight = document.getElementById('wasteWeight').value;
      const type = document.getElementById('wasteType').value;
      const price = document.getElementById('wastePrice').value;
      const source = document.getElementById('wasteSource').value;
      const emissions = document.getElementById('wasteEmissions').value;

      const newRow = `
          <tr>
            <td class="text-center"><div class="ellipse"></div></td>
            <td class="text-center">${name}</td>
            <td class="text-center">${weight}</td>
            <td class="text-center">${type}</td>
            <td class="text-center">${price}</td>
            <td class="text-center">${source}</td>
            <td class="text-center">${emissions}</td>
          </tr>
        `;

      document.getElementById('waste-table').insertAdjacentHTML('beforeend', newRow);

      $('#addWasteModal').modal('hide');
    }
  });

  // Event delegation for button click
  document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'submitWasteData') {
      // Dummy data
      const activityName = 'New Activity';
      const totalJual = 'Rp50.000';
      const totalEmisi = '10.0 kg CO₂';

      const newActivityRow = `
          <tr>
            <td class="text-center"><div class="ellipse"></div></td>
            <td class="text-center">${activityName}</td>
            <td class="text-center">${totalJual}</td>
            <td class="text-center">${totalEmisi}</td>
            <td class="text-center"><button class="btn btn-success btn-sm">Selengkapnya</button></td>
          </tr>
        `;

      document.getElementById('activity-table').insertAdjacentHTML('beforeend', newActivityRow);
    }
  });
}

export { initializeEventListeners };
