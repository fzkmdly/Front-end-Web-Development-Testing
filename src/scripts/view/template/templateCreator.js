const vehicleItem = (vehicle) => {
  return `
    <div class="vehicleItem" id="vehicleItem">
        <section class="topCard"></section>
        <section class="descCard"></section>
    </div>
    `;
};

const vehicleDetail = (vehicle) => {
  return `
    <article id="vehicleDetail" class="vehicleDetail">
        <div class="detailHeader"></div>
        <div class="detailDesc"></div>
        <div class="detailInfo"></div>
    </article>
    `;
};

const createLoginPages = () => {
  return `
  <div class="form-login">
    <h1><span>Masuk</span></h1>
    <form>
      <div class="form-content">
        <input name="inputEmail" type="email" class="form-control" id="inputEmail" placeholder="Masukkan Email">
      </div>
      <div class="form-content">
        <input name="inputPassword" type="password" class="form-control" id="inputPassword" placeholder="Masukkan Kata Sandi">
      </div>
      <button id="submit-login" type="submit" class="btn">Login</button>
    </form>
  </div>
  `;
};

const createRegisterPages = () => {
  return `
  <div class="form-register">
    <h1><span>Daftar</span></h1>
    <form id="registrationForm" onsubmit="return validateForm()">
      <div class="form-content">
        <input name="inputName" type="text" class="form-control" id="inputName" placeholder="Masukkan Nama Lengkap">
      </div>
      <div class="form-content">
        <input name="inputEmail" type="email" class="form-control" id="inputEmail" placeholder="Masukkan Email">
      </div>
      <div class="form-content">
        <input name="inputPassword" type="password" class="form-control" id="inputPassword" placeholder="Masukkan Kata Sandi">
      </div>
      <div class="form-content">
        <input name="confirmPassword" type="password" class="form-control" id="confirmPassword" placeholder="Konfirmasi Kata Sandi">
      </div>
      <span id="passwordError" class="error"></span>
      <button id="submit-register" type="submit" class="btn">Register</button>
    </form>
  </div>
  <script>
    function validateForm() {
      var password = document.getElementById("inputPassword").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      var passwordError = document.getElementById("passwordError");

      if (password !== confirmPassword) {
        passwordError.textContent = "Kata Sandi tidak cocok";
        return false;
      } else {
        passwordError.textContent = "";
        return true;
      }
    }
  </script>
  `;
};

// const createPartnerRegisterPages = () => {
//   return `
//   <div class="form-register-partner">
//     <h1><span>Daftar</span></h1>
//     <h2><span>Data Identitas</span></h2>
//     <form id="partnerRegistrationForm" onsubmit="return validatePartnerRegistrationForm()">
//       <div class="form-content">
//         <input name="inputName" type="text" class="form-control" id="inputName" placeholder="Masukkan Nama Sesuai KTP">
//       </div>
//       <div class="form-content">
//         <input name="inputNIK" type="number" class="form-control" id="inputNIK" placeholder="Masukkan NIK">
//       </div>
//       <div class="form-content">
//         <input name="inputTempatLahir" type="text" class="form-control" id="inputTempatLahir" placeholder="Masukkan Tempat Lahir">
//       </div>
//       <div class="form-content">
//         <input name="inputTanggalLahir" type="date" class="form-control" id="inputTanggalLahir" min="1950-01-01" max="${getCurrentDate()}">
//       </div>
//       <div class="form-content">
//         <input name="inputNomorHP" type="number" class="form-control" id="inputNomorHP">
//       </div>
//       <div class="form-content">
//         <input name="inputEmail" type="email" class="form-control" id="inputEmail" placeholder="Masukkan Email">
//       </div>
//       <span id="nikError" class="error"></span>
//       <span id="nomorHPError" class="error"></span>
//       <button id="submit-register" type="submit" class="btn">Register</button>
//     </form>
//     <script>
//       function getCurrentDate() {
//         var today = new Date();
//         var dd = String(today.getDate()).padStart(2, '0');
//         var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
//         var yyyy = today.getFullYear();
//         return yyyy + '-' + mm + '-' + dd;
//       }

//       function validatePartnerRegistrationForm() {
//         var nik = document.getElementById("inputNIK").value;
//         var nikError = document.getElementById("nikError");

//         // Validate that the NIK is exactly 16 digits long
//         if (nik.length !== 16 || isNaN(nik)) {
//           nikError.textContent = "NIK harus terdiri dari 16 digit";
//           return false;
//         } else {
//           nikError.textContent = "";
//         }

//         return true;

//         var nomorHP = document.getElementById("inputNomorHP").value;
//         var nomorHPError = document.getElementById("nomorHPError");

//         // Validate that the phone number is between 10 and 13 digits
//         if (phoneNumber.length < 10 || phoneNumber.length > 13 || isNaN(phoneNumber)) {
//           phoneError.textContent = "Nomor Telepon harus terdiri dari 10 hingga 13 digit";
//           return false;
//         } else {
//           phoneError.textContent = "";
//         }
//       }
//     </script>
//   </div>
//   `;
// };

const createPartnerRegisterPages = () => {
  return `
                <form action="#" method="post" onsubmit="return validatePartnerRegistrationForm()">
                  <h1>Daftar Partner</h1>
                  <h4>Data Diri</h4>
                  <div class="form-body">
                    <div class="form-column">
                        <label for="nama">Nama:</label>
                        <input type="text" id="nama" name="nama" required>

                        <div class="tempatTanggalLahir">
                            <label for="ttl">Tempat</label>
                            <label for="tanggalLahir">Tanggal Lahir:</label>
                            <input type="text" id="tempatLahir" name="tempatLahir" required>
                            <input type="date" id="tanggalLahir" name="tanggalLahir" required>
                        </div>

                        <label for="alamat">Alamat:</label>
                        <input type="text" id="alamat" name="alamat" required>
                    </div>

                    <div class="form-column">
                        <label for="nik">NIK:</label>
                        <input type="text" id="nik" name="nik" required>
                        <span id="nikError" class="error"></span>


                        <label for="telepon">Telepon:</label>
                        <input type="tel" id="telepon" name="telepon" required>
                        <span id="teleponError" class="error"></span>

                        <label for="kodepos">Kode Pos:</label>
                        <input type="text" id="kodepos" name="kodepos" required>

                        <label for="email">Email:</label>
                        <input type="email" id="emailPartner" name="email" required>
                    </div>
                  </div>

                    <button class="partnerButton" type="submit">Daftar Sekarang</button>
                </form>
                <script>
                  function getCurrentDate() {
                    var today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
                    var yyyy = today.getFullYear();
                    return yyyy + '-' + mm + '-' + dd;
                  }

                  function validatePartnerRegistrationForm() {
                    var nik = document.getElementById("nik").value;
                    var nikError = document.getElementById("nikError");

                    // Validate that the NIK is exactly 16 digits long
                    if (nik.length !== 16 || isNaN(nik)) {
                      nikError.textContent = "NIK harus terdiri dari 16 digit";
                      return false;
                    } else {
                      nikError.textContent = "";
                    }

                    var telepon = document.getElementById("telepon").value;
                    var teleponError = document.getElementById("teleponError");

                    // Validate that the phone number is between 10 and 13 digits
                    if (telepon.length < 10 || telepon.length > 13 || isNaN(telepon)) {
                      teleponError.textContent = "Nomor Telepon harus terdiri dari 10 hingga 13 digit";
                      return false;
                    } else {
                      teleponError.textContent = "";
                    }

                    // Add more validation for other fields if needed...

                    return true;
                  }
                </script>

  `;
};

const createTOCPages = () => {
  return `
  <div class="terms-container">
  <h2>Syarat dan Ketentuan Rent'O</h2>

  <ol>
    <li><strong>Penerimaan Syarat</strong>
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
};

module.exports = {
  vehicleItem,
  vehicleDetail,
  createLoginPages,
  createRegisterPages,
  createPartnerRegisterPages,
  createTOCPages,
};
