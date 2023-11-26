const vehicleItem = (vehicle) => {
  return `
          <div class="vehicleItem" id="vehicleItem">
            <section class="vehicleItem-left">
              <img src="https://i.pinimg.com/736x/22/4f/fd/224ffd65ee22d448ac3f587c5d192370.jpg" alt="vehicle image">
            </section>
            <section class="vehicleItem-center">
                <h4>${vehicle.name}</h4>
                <h6>${vehicle.city}</h6>
            </section>
            <section class="vehicleItem-right">
                <h6>Mulai dari</h6>
                <h4>Rp. 150.000/hari</h4>
                <a href="#/detail/${vehicle.id}">Pilih</a>
            </section>
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

module.exports = {
  vehicleItem,
  vehicleDetail,
  createLoginPages,
  createRegisterPages,
  createPartnerRegisterPages,
};
