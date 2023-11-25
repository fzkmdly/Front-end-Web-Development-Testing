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
  createAboutPages,
};
