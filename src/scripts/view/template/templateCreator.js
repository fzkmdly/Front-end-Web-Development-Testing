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
          <h6 class="city"><i class="fa-solid fa-location-dot"></i>  ${vehicle.city}</h6>
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
  `;
};

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
  `;
};

module.exports = {
  vehicleItem,
  vehicleDetail,
  createLoginPages,
  createRegisterPages,
  createPartnerRegisterPages,
  createCarCollection,
};
