const vehicleItem = (vehicle) => {
  return `
        <a href="#/detail/${vehicle.id}" class="vehicleItem-clickable">
          <div class="vehicleItem" id="vehicleItem">
            <section class="vehicleItem-left">
              <img class="lazyload" src="https://i.pinimg.com/736x/22/4f/fd/224ffd65ee22d448ac3f587c5d192370.jpg" alt="vehicle image">
            </section>
            <section class="vehicleItem-center">
                <h4 class="vehicle-name">${vehicle.name}</h4>
                <h6 class="city"><i class="fa-solid fa-location-dot"></i>  ${vehicle.city}</h6>
            </section>
            <section class="vehicleItem-right">
                <h6 class="start-from">Mulai</h6>
                <h4 class="harga">Rp150.000/hari</h4>
            </section>
          </div>
        </a>
    `;
};

const createCarCollection = (vehicle) => {
  return `
    <a href="#/detail/${vehicle.id}" class="car-container">
      <div>
        <section class="car-collection-image">
          <picture>
            <source type="image/webp" srcset="./images/assets/dummy-images/raize-white-black.webp">
            <source type="image/png" srcset="./images/assets/dummy-images/raize-white-black.png">
            <img src="./images/assets/dummy-images/raize-white-black.png" alt="Toyota Raize with white on top and black at entire bodyworks">
          </picture>
        </section>
        <section class="car-collection-name">
          <h4 class="car-name">${vehicle.name}</h4>
          <h6 class="city"><i class="fa-solid fa-location-dot fa-shake"></i>  ${vehicle.city}</h6>
        </section>
        <section class="car-collection-price">
          <h4 class="harga">Rp150.000/hari</h4>
        </section>
      </div>
    </a>
  `;
};

const vehicleDetail = (vehicle) => {
  return `
      <article id="vehicleDetail" class="vehicleDetail">
        <div class="vehicleDetailLeft" id="vehicleDetailLeft">
            <h1>${vehicle.name}</h1>
            <img src="https://i.pinimg.com/564x/b1/ad/8c/b1ad8c93a5d96e425e8cb1addc72dce9.jpg" alt="gambar mobil">
            <p>4 Penumpang</p>
            <p>${vehicle.city}</p>
        </div>
        <div class="vehicleDetailRight" id="vehicleDetailRight">
            <section class="vehicleDetailInfo" id="vehicleDetailInfo">
                <div class="vehicleOwnerLeft">
                    <img src="https://i.pinimg.com/236x/4d/9f/c4/4d9fc4609216b812d03302e302a418a5.jpg" alt="">
                    <div class="vehicleOwnerInfo">
                        <p>Ryo Yamada</p>
                        <p><span>Tahun :</span> 2020</p>
                    </div>
                </div>
                <div class="vehicleInfoPrice">
                    <p>Mulai dari</p>
                    <p>Rp. 150.000/hari</p>
                    <a href="#/detail/${vehicle.id}/check">Check</a>
                </div>
            </section>
            <section class="vehicleDetailDesc" id="vehicleDetailDesc">
                <div class="vehicleDetailDescription">
                    <h3>Deskripsi</h3>
                    <p>${vehicle.description}</p>
                </div>
                <div>
                    <h3>Gambar Mobil</h3>
                    <div class="vehicleDetailPhotolist">
                        <img src="https://i.pinimg.com/236x/cc/30/dc/cc30dc001ec691261e9f0fa54eba2e2f.jpg" alt="">
                        <img src="https://i.pinimg.com/236x/5b/8e/16/5b8e166e9ff581151b998db6e163a380.jpg" alt="">
                        <img src="https://i.pinimg.com/236x/10/94/43/10944325197df224075945ce7a46df6d.jpg" alt="">
                        <img src="https://i.pinimg.com/236x/b2/13/e5/b213e52d58c4f548833e50b23e8c469a.jpg" alt="">
                    </div>
                </div>
            </section>
            <section class="vehicleDetailRenting" id="vehicleDetailRenting">
                <h3>Lokasi?</h3>
                <form action="" method="post">
                    <div class="vehicleDetailForm">
                        <div>
                            <label for="Lokasi?">Lokasi</label>
                            <input type="text" name="lokasi" id="lokasi" placeholder="Pilihlah Lokasi">
                        </div>
                        <div>
                            <label for="TanggalMulai">Tanggal Mulai</label>
                            <input type="date" name="tanggalMulai" id="tanggalMulai" placeholder="Pilih Waktu">
                        </div>
                        <div>
                            <label for="LokasiPenganter">Lokasi Pengantar</label>
                            <input type="text" name="lokasiPengantar" id="lokasiPengantar">
                        </div>
                        <div>
                            <label for="Lokasi?">Tanggal Selesai</label>
                            <input type="date" name="tanggalSelesai" id="tanggalSelesai">
                        </div>
                    </div>
                    <button type="submit">Lanjutkan Pembayaran</button>
                </form>
            </section>
        </div>
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
  `;
};

const createAboutPages = () => {
  return `
  <div class="about-container">
  <h1 class="about-us">Rent'O: Solusi Penyewaan Mobil Terbaik Anda</h1>
  <div class="about-row">
    <div class="about-box">
      <h2 class="about-heading">Armada kami</h2>
      <p class="about-description">Di Rent'O, kami menawarkan beragam kendaraan berkualitas tinggi yang sesuai dengan setiap 
      kebutuhan dan preferensi. Apakah Anda mencari mobil kompak untuk petualangan solo atau SUV yang luas untuk perjalanan keluarga, 
      armada kami yang luas siap membantu Anda.</p>
    </div>
    <div class="about-box">
      <h2 class="about-heading">Bagaimana cara kerjanya</h2>
      <p class="about-description">Menyewa mobil dengan Rent'O sangatlah mudah. Cukup telusuri platform kami yang mudah digunakan, 
      pilih kendaraan yang sesuai dengan kebutuhan Anda, dan lakukan reservasi. Proses kami yang mudah memastikan bahwa Anda dapat 
      fokus pada perjalanan Anda, bukan pada dokumen.</p>
    </div>
  </div>
  <div class="about-row">
    <div class="about-box">
      <h2 class="about-heading">Untuk Pemilik Mobil</h2>
      <p class="about-description">Apakah Anda pemilik mobil yang ingin mendapatkan penghasilan tambahan? Bergabunglah dengan Rent'O 
      sebagai mitra dan daftarkan kendaraan Anda dengan mudah untuk disewakan. Platform kami menyediakan cara yang aman dan efisien 
      bagi Anda untuk berbagi mobil dengan tetap memegang kendali penuh atas ketentuan sewa Anda.</p>
    </div>
    <div class="about-box">
      <h2 class="about-heading">Misi</h2>
      <p class="about-description">Rent'O memiliki misi untuk menyederhanakan proses penyewaan mobil, membuatnya mudah diakses dan 
      nyaman bagi semua orang. Kami bertujuan untuk menjembatani kesenjangan antara pemilik dan penyewa mobil, membina komunitas 
      yang dibangun di atas kepercayaan, transparansi, dan pengalaman bersama.</p>
    </div>
  </div>
  <div class="about-developer-section">
    <h2 class="about-heading">Meet Our Team</h2>

    <!-- Lead & Fullstack Developers -->
    <h2 class="about-heading">Lead & Fullstack Developers</h2>
    <div class="about-row">
      <div class="about-team-member">
        <picture>
          <source type="image/webp" srcset="./images/assets/about-us/fullstack/developer-1.webp">
          <source type="image/jpeg" srcset="./images/assets/about-us/fullstack/developer-1.jpg">
          <img src="./images/assets/about-us/fullstack/developer-1.jpg" alt="Lead & Fullstack Developer">
        </picture>
        <h3 class="team-member-name">Benaya Adi Sahat Dwiyanto</h3>
        <p class="team-member-university">Politeknik Negeri Jakarta</p>
      </div>
    </div>

    <!-- Back-end Developers -->
    <h2 class="about-heading">Back-end Developers</h2>
    <div class="about-row">
      <div class="about-team-member">
        <picture>
          <source type="image/webp" srcset="./images/assets/about-us/back-end/developer-1.webp">
          <source type="image/jpeg" srcset="./images/assets/about-us/back-end/developer-1.jpg">
          <img src="./images/assets/about-us/back-end/developer-1.jpg" alt="Backend Developer 1">
        </picture>
        <h3 class="team-member-name">Daffa Habibullah</h3>
        <p class="team-member-university">Universitas Bina Sarana Informatika</p>
      </div>
      <div class="about-team-member">
        <picture>
          <source type="image/webp" srcset="./images/assets/about-us/back-end/developer-2.webp">
          <source type="image/jpeg" srcset="./images/assets/about-us/back-end/developer-2.jpg">
          <img src="./images/assets/about-us/back-end/developer-2.jpg" alt="Backend Developer 2">
        </picture>
        <h3 class="team-member-name">Adam Arrahman</h3>
        <p class="team-member-university">Universitas Suryakencana</p>
      </div>
    </div>

    <!-- Front-end Developers -->
    <h2 class="about-heading">Front-end Developers</h2>
    <div class="about-row">
      <div class="about-team-member">
        <picture>
          <source type="image/webp" srcset="./images/assets/about-us/front-end/developer-1.webp">
          <source type="image/jpeg" srcset="./images/assets/about-us/front-end/developer-1.jpg">
          <img src="./images/assets/about-us/front-end/developer-1.jpg" alt="Front-end Developer 1">
        </picture>
        <h3 class="team-member-name">Faiz Akhmad Daulay</h3>
        <p class="team-member-university">Universitas Muhammadiyah Sukabumi</p>
      </div>
      <div class="about-team-member">
        <picture>
          <source type="image/webp" srcset="./images/assets/about-us/front-end/developer-2.webp">
          <source type="image/jpeg" srcset="./images/assets/about-us/front-end/developer-2.jpg">
          <img src="./images/assets/about-us/front-end/developer-2.jpg" alt="Front-end Developer 2">
        </picture>
        <h3 class="team-member-name">Faisal A F Rahman</h3>
        <p class="team-member-university">Universitas Muhammadiyah Sukabumi</p>
      </div>
    </div>
  </div>
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
  createAboutPages,
  createCarCollection,
};
