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
            <td class="text-center p-2">${name}</td>
            <td class="text-center p-2">
            <input type="text" value="${weight}">
            </td>
            <td class="text-center p-2">${type}</td>
            <td class="text-center p-2">${source}</td>
            <td class="text-center p-2">${price}</td>
            <td class="text-center p-2">${emissions}</td>
          </tr>
        `;

      document.getElementById('waste-table').insertAdjacentHTML('beforeend', newRow);

      // Reset the form
      event.target.reset();

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
            <td class="text-center p-2">${activityName}</td>
            <td class="text-center p-2">${totalJual}</td>
            <td class="text-center p-2">${totalEmisi}</td>
            <td class="text-center p-2"><button class="btn btn-success btn-sm">Selengkapnya</button></td>
          </tr>
        `;

      document.getElementById('activity-table').insertAdjacentHTML('beforeend', newActivityRow);
    }
  });
}

export { initializeEventListeners };
