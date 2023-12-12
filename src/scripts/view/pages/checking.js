import Swal from 'sweetalert2/dist/sweetalert2.all.min';
import CarDbSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import {vehicleCheckin} from '../template/templateCreator';

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
      tanggalMulai: document.getElementById('tanggalMulai').value,
      tanggalSelesai: document.getElementById('tanggalSelesai').value,
      lokasi: document.getElementById('lokasi').value,
      waktuPenjemputan: document.getElementById('waktuPenjemputan').value,
      lokasiPengantar: document.getElementById('lokasiPengantar').value,
      waktuPengantaran: document.getElementById('waktuPengantaran').value,
      paymentMethod: document.getElementById('payment-method').value,
      selisihHari: hitungHari(document.getElementById('tanggalMulai').value, document.getElementById('tanggalSelesai').value),
    };

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const vehiclesData = await CarDbSource.detailCar(url.id);

    console.log(formData);

    try {
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
