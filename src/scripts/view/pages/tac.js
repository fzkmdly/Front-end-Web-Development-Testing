const ToC = {
  async render() {
    return `
      <div id="TOC" class="TOC">
        <div class="terms-container">
        <h2>Syarat dan Ketentuan Rent'O</h2>
      
        <ol>
          <li><strong>Penerimaan Syarat dan Ketentuan yang Berlaku</strong>
            <p>Dengan menggunakan layanan Rent'O, Anda setuju untuk mematuhi dan terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan salah satu bagian dari syarat ini, Anda tidak diperkenankan menggunakan layanan kami.</p>
          </li>
      
          <li><strong>Perjanjian Sewa</strong>
            <ol type="a">
              <li>Saat menyewa mobil dari Rent'O, Anda setuju untuk mematuhi semua persyaratan yang diuraikan dalam Perjanjian Sewa. Persyaratan ini mencakup durasi penyewaan, biaya, dan kondisi kendaraan.</li>
              <li>Anda bertanggung jawab untuk membaca dan memahami semua ketentuan dalam Perjanjian Sewa sebelum menandatanganinya.</li>
            </ol>
          </li>
      
          <li><strong>Kelayakan</strong>
            <ol type="a">
              <li>Anda harus berusia minimal 21 tahun untuk menyewa mobil dari Rent'O.</li>
              <li>Anda wajib memiliki SIM (Surat Izin Mengemudi) yang masih berlaku dan sesuai dengan kelas kendaraan yang akan Anda sewa.</li>
              <li>Proses penyewaan dapat memerlukan verifikasi identitas dan informasi pembayaran yang valid.</li>
              <li>Rent'O berhak menolak penyewaan jika persyaratan kelayakan tidak terpenuhi.</li>
            </ol>
          </li>
      
          <li><strong>Reservasi dan Pembayaran</strong>
            <ol type="a">
              <li>Reservasi tergantung pada ketersediaan kendaraan. Kami merekomendasikan untuk melakukan reservasi sebelumnya untuk memastikan ketersediaan mobil.</li>
              <li>Pembayaran harus dilakukan di muka melalui metode pembayaran yang disetujui. Biaya tambahan mungkin dikenakan untuk pengembalian terlambat atau kondisi tertentu lainnya.</li>
            </ol>
          </li>
      
          <li><strong>Kebijakan Pembatalan</strong>
            <ol type="a">
              <li>Kebijakan pembatalan berbeda berdasarkan jenis reservasi. Silakan lihat syarat-syarat spesifik yang diberikan selama proses pemesanan.</li>
              <li>Pembatalan yang dilakukan dalam waktu yang singkat mungkin dikenakan biaya pembatalan sesuai dengan kebijakan yang berlaku.</li>
            </ol>
          </li>
      
          <li><strong>Penggunaan Kendaraan</strong>
            <ol type="a">
              <li>Kendaraan yang disewa harus digunakan hanya untuk tujuan yang legal dan aman. Pelanggaran apa pun terhadap hukum dapat mengakibatkan pemutusan perjanjian sewa.</li>
              <li>Anda bertanggung jawab untuk menjaga kendaraan dalam kondisi baik selama periode penyewaan.</li>
            </ol>
          </li>
      
          <li><strong>Asuransi</strong>
              <ol type="a">
                  <li>Pelanggan disarankan untuk memiliki asuransi kecelakaan. Rent'O juga menyediakan asuransi kecelakaan tambahan untuk pelanggan tanpa biaya tambahan.</li>
                  <li>Asuransi kecelakaan dari Rent'O sudah termasuk dalam biaya layanan dan berlaku dari tanggal awal penggunaan hingga tanggal akhir penggunaan layanan Rent'O.</li>
                  <li>Pelanggan bertanggung jawab untuk memberikan informasi yang benar terkait klaim asuransi jika diperlukan.</li>
              </ol>
          </li>
      
          <li><strong>Pengembalian Kendaraan</strong>
            <ol type="a">
              <li>Kendaraan harus dikembalikan tepat waktu dan dalam kondisi yang sama seperti saat disewa. Keterlambatan pengembalian dapat dikenai biaya tambahan.</li>
              <li>Pengecualian dari kondisi normal akibat pemakaian wajar akan ditanggung oleh Rent'O.</li>
            </ol>
          </li>
      
          <li><strong>Pemeliharaan dan Perbaikan</strong>
            <ol type="a">
              <li>Pelanggan wajib melaporkan segala kerusakan pada kendaraan kepada Rent'O sesegera mungkin.</li>
              <li>Jika kendaraan mengalami kerusakan karena kelalaian atau tindakan penyewa, penyewa wajib menanggung seluruh biaya perbaikan.</li>
            </ol>
          </li>
      
          <li><strong>Pemutusan Layanan</strong>
            <ol type="a">
              <li>Rent'O berhak untuk mengakhiri perjanjian sewa dan mengambil kembali kendaraan jika ada pelanggaran terhadap syarat-syarat ini atau jika kendaraan digunakan untuk kegiatan ilegal.</li>
              <li>Pemutusan dapat terjadi jika pelanggan tidak mematuhi perjanjian, termasuk penggunaan yang tidak sah atau penyalahgunaan kendaraan.</li>
            </ol>
          </li>
      
          <li><strong>Penolakan Tanggung Jawab</strong>
            <ol type="a">
              <li>Rent'O tidak bertanggung jawab atas kehilangan, cedera, atau kerusakan yang timbul dari penggunaan layanan rental kami.</li>
              <li>Pelanggan setuju untuk membebaskan Rent'O dari segala tuntutan hukum yang mungkin timbul dari penggunaan layanan ini.</li>
            </ol>
          </li>
      
          <li><strong>Perubahan pada Syarat</strong>
            <ol type="a">
              <li>Rent'O dapat memperbarui Syarat dan Ketentuan ini dari waktu ke waktu. Pengguna akan diberi tahu tentang perubahan apa pun melalui pemberitahuan yang sesuai.</li>
              <li>Pelanggan diharapkan untuk secara berkala memeriksa Syarat dan Ketentuan untuk memahami perubahan yang mungkin terjadi.</li>
            </ol>
          </li>
        </ol>
      </div>
      `;
  },

  async afterRender() {
  },
};

export default ToC;
