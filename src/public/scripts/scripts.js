/* eslint-disable no-unused-vars */
function showListRentaled() {
  console.log('showListRentaled function called');
  document.getElementById('listYourRentaled').classList.add('active');
  document.getElementById('listRentaledHistory').classList.remove('active');
  document.getElementById('listRentaledToggle').classList.add('focused');
  document.getElementById('listHistoryToggle').classList.remove('focused');
}

function showRentedHistory() {
  console.log('showRentedHistory function called');
  document.getElementById('listYourRentaled').classList.remove('active');
  document.getElementById('listRentaledHistory').classList.add('active');
  document.getElementById('listHistoryToggle').classList.add('focused');
  document.getElementById('listRentaledToggle').classList.remove('focused');
}

function previewImage() {
  const fileInput = document.getElementById('vehicleImage');
  const imagePreviewContainer = document.getElementById('imagePreviewContainer');
  const imagePreview = document.getElementById('imagePreview');

  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      console.log(e);
      imagePreviewContainer.style.display = 'block';
    };

    // Baca data URL gambar
    reader.readAsDataURL(file);
  }
}

// function formatRupiah(input) {
//   // Mengambil nilai input
//   let nilaiUang = input.value;

//   nilaiUang = nilaiUang.replace(/\D/g, '');

//   // Format menjadi mata uang Rupiah
//   nilaiUang = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(nilaiUang);

//   // Menetapkan nilai yang diformat ke input
//   return input.value = nilaiUang;
// }

// window.onload = function() {
// // Ambil elemen input dengan ID 'paymentCheck'
// let inputPayment = document.getElementById('paymentCheck');
// // Panggil fungsi formatRupiah dengan input tersebut
// formatRupiah(inputPayment);
// };
