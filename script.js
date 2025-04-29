document
  .getElementById("inventoryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const kode = document.getElementById("kode").value;
    const namaBarang = document.getElementById("namaBarang").value;
    const qty = document.getElementById("qty").value;
    const UOM = document.getElementById("UOM").value;

    const table = document
      .getElementById("inventoryTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = kode;
    newRow.insertCell(1).innerText = namaBarang;
    newRow.insertCell(2).innerText = qty;
    newRow.insertCell(3).innerText = UOM;

    // Reset input fields
    document.getElementById("inventoryForm").reset();
  });
