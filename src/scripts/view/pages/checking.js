import Swal from 'sweetalert2/dist/sweetalert2.all.min';
import CarDbSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import {vehicleCheckin} from '../template/templateCreator';
import API_ENDPOINT from '../../globals/api-endpoint';

const Checking = {
  async render() {
    return `
        <div class="checking-page" id="checking-page">

        </div>
    `;
  },

  async afterRender() {
    try {
      const checkingContainer = document.getElementById('checking-page');

      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const vehicleData = await CarDbSource.detailCar(url.id);
      checkingContainer.innerHTML += vehicleCheckin(vehicleData);

      const checkingButton = document.getElementById('insertData-btn');
      checkingButton.addEventListener('click', this.bookingHandler.bind(this));
    } catch (error) {
      console.log(error);
    }
  },

  async bookingHandler() {
    event.preventDefault();
    const formData = {
      startDate: document.getElementById('tanggalMulai').value,
      endDate: document.getElementById('tanggalSelesai').value,
      pickupLocation: document.getElementById('lokasi').value,
      pickupTime: document.getElementById('waktuPenjemputan').value,
      deliveryLocation: document.getElementById('lokasiPengantar').value,
      deliveryTime: document.getElementById('waktuPengantaran').value,
      paymentMethod: document.getElementById('payment-method').value,
      selisihHari: hitungHari(document.getElementById('tanggalMulai').value, document.getElementById('tanggalSelesai').value),
      vehicleId: UrlParser.parseActiveUrlWithoutCombiner().id,
    };

    const url = `${API_ENDPOINT.ORDER_RENTAL}/${formData.vehicleId}`;

    // Read the login information from localStorage
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || {};
    const accessToken = loginInfo.uid || '';

    try {
      // Make the POST request to the API endpoint
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        sessionStorage.setItem('rentalData', JSON.stringify(formData));

        Swal.fire({
          icon: 'info',
          title: 'Menyiapkan data',
          text: 'Permintaan Anda sedang diproses',
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          const url = UrlParser.parseActiveUrlWithoutCombiner();
          window.location.hash = `#/checkout/${url.id}`;
        });
      } else {
        throw new Error('Failed to make the POST request');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Data gagal disimpan',
        text: 'Coba periksa kembali data yang anda tulis',
      });
      console.error(error);
    }
  },
};

function hitungHari(tanggalMulaiValue, tanggalSelesaiValue) {
  // Mengonversi tanggal menjadi objek Date
  const tanggalMulai = new Date(tanggalMulaiValue);
  const tanggalSelesai = new Date(tanggalSelesaiValue);

  // Menghitung selisih hari
  const selisihHari = (tanggalSelesai - tanggalMulai) / (1000 * 60 * 60 * 24);

  // Menampilkan hasil
  return selisihHari;
}

export default Checking;
