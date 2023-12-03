const vehicleItem = (vehicle) => {
  const formattedLocations = vehicle.locations.join(', ');
  const formattedCost = vehicle.vehicleInformation.cost.toLocaleString('id-ID');

  return `
        <a href="#/detail/${vehicle.vehicleId}" class="vehicleItem-clickable">
          <div class="vehicleItem" id="vehicleItem">
            <section class="vehicleItem-left">
              <img class="lazyload" data-src="${vehicle.images.imagesId1.post_image_url}" alt="Gambar dari ${vehicle.vehicleInformation.name}" />
            </section>
            <section class="vehicleItem-center">
                <h4 class="vehicle-name">${vehicle.vehicleInformation.brand} ${vehicle.vehicleInformation.name}</h4>
                <h6 class="city"><i class="fa-solid fa-location-dot"></i>  ${formattedLocations}</h6>
            </section>
            <section class="vehicleItem-right">
                <h6 class="start-from">Mulai</h6>
                <h4 class="harga">Rp${formattedCost}/hari</h4>
            </section>
          </div>
        </a>
    `;
};

const createCarCollection = (vehicle) => {
  const formattedLocations = vehicle.locations.join(', ');
  const formattedCost = vehicle.vehicleInformation.cost.toLocaleString('id-ID');

  return `
    <a href="#/detail/${vehicle.vehicleId}" class="car-container">
      <div>
        <section class="car-collection-image">
          <img class="lazyload" data-src="${vehicle.images.imagesId1.post_image_url}" alt="Gambar dari ${vehicle.vehicleInformation.name}" />
        </section>
        <section class="car-collection-name">
          <h4 class="car-name">${vehicle.vehicleInformation.brand} ${vehicle.vehicleInformation.name}</h4>
          <h6 class="city"><i class="fa-solid fa-location-dot"></i>  ${formattedLocations}</h6>
        </section>
        <section class="car-collection-price">
          <h4 class="harga">Rp${formattedCost}/hari</h4>
        </section>
      </div>
    </a>
  `;
};


const vehicleDetail = (vehicle) => {
  const formattedLocations = vehicle.locations.join(', ');
  const formattedCost = vehicle.vehicleInformation.cost.toLocaleString('id-ID');

  return `
          <div class="detailTracker">
            <a href="#">Beranda/</a>
            <a href="#/sewa">Daftar Mobil/</a>
            <a href="#/detail/${vehicle.vehicleId}">${vehicle.vehicleInformation.brand} ${vehicle.vehicleInformation.name}</a>
          </div>
          <article id="vehicleDetail" class="vehicleDetail">
            <div class="vehicleDetailLeft" id="vehicleDetailLeft">
                <div class="detail-top-left">
                    <img class="lazyload" data-src="${vehicle.images.imagesId1.post_image_url}" alt="Gambar dari ${vehicle.vehicleInformation.name}" />
                    <h1>${vehicle.vehicleInformation.brand} ${vehicle.vehicleInformation.name}</h1>
                    <p>Tahun: ${vehicle.vehicleInformation.year}</p>
                    <p><i class="fa-solid fa-person"></i>  ${vehicle.vehicleInformation.seats} Penumpang</p>
                    <p><i class="fa-solid fa-location-dot"></i>  ${formattedLocations}</p>
                </div>
                <div class="detail-bottom-left">
                    <section class="vehicleDetailInfo" id="vehicleDetailInfo">
                        <div class="vehicleOwnerLeft">
                            <img src="https://i.pinimg.com/236x/4d/9f/c4/4d9fc4609216b812d03302e302a418a5.jpg" alt="">
                            <div class="vehicleOwnerInfo">
                                <p>${vehicle.partner.partnerName}</p>
                            </div>
                        </div>
                        <div class="vehicleInfoPrice">
                            <p>Mulai dari <br>Rp${formattedCost}/hari</p>
                            <a href="#/checking/${vehicle.vehicleId}">Sewa Sekarang!</a>
                        </div>
                    </section>
                </div>
            </div>
            <div class="vehicleDetailRight" id="vehicleDetailRight">
                <section class="vehicleDetailDesc" id="vehicleDetailDesc">
                    <div class="vehicleDetailDescription">
                        <h3>Deskripsi</h3>
                        <p>${vehicle.vehicleInformation.description}</p>
                    </div>
                    <div>
                        <h3>Gambar Mobil</h3>
                        <div class="vehicleDetailPhotolist">
                          <img class="lazyload" data-src="${vehicle.images.imagesId1.post_image_url}" alt="Gambar dari ${vehicle.vehicleInformation.name}" />
                        </div>
                    </div>
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

const vehicleCheckin = (vehicle) =>{
  return `
  <section class="vehicleDetailRenting" id="vehicleDetailRenting">
    <h1>${vehicle.name}</h1>
    <h3>Lokasi?</h3>
    <form>
        <div class="vehicleCheckinDate">
            <div>
                <label for="TanggalMulai">Tanggal Mulai</label>
                <input type="date" name="tanggalMulai" id="tanggalMulai" placeholder="Pilih Waktu">
            </div>
            <div>
                <label for="tanggalSelesai">Tanggal Selesai</label>
                <input type="date" name="tanggalSelesai" id="tanggalSelesai">
            </div>
        </div>
        <h3>Rental Detail</h3>
        <div class="vehicleDetailForm">
            <div>
                <label for="Lokasi?">Lokasi Penjemputan</label>
                <input type="text" name="lokasi" id="lokasi" placeholder="Pilihlah Lokasi">
            </div>
            <div>
                <label for="waktuPenjemputan">Waktu Penjemputan</label>
                <input type="time" name="waktuPenjemputan" id="waktuPenjemputan" placeholder="Pilih Waktu">
            </div>
            <div>
                <label for="LokasiPengantar">Lokasi Pengantar</label>
                <input type="text" name="lokasiPengantar" id="lokasiPengantar" placeholder="Pilihlah Lokasi">
            </div>
            <div>
                <label for="waktuPengantaran">Waktu Pengantaran</label>
                <input type="time" name="waktuPengantaran" id="waktuPengantaran">
            </div>
        </div>
        <div class="payingMethod">
            <div class="drawer-content">
                <label for="payment-method">Pilih Metode Pembayaran</label>
                <select id="payment-method" onchange="displayPaymentMethod()">
                    <optgroup label="Transfer Virtual Account">
                        <option value="BCAVirtualAccount">BCA Virtual Account</option>
                        <option value="BNIVirtualAccount">BNI Virtual Account</option>
                        <option value="PermataVirtualAccount">Permata Virtual Account</option>
                        <option value="MandiriVirtualAccount">Mandiri Virtual Account</option>
                    </optgroup>
                    <optgroup label="Tunai di Gerai Retail">
                        <option value="IndomartPayment">Indomart</option>
                        <option value="AlfaMartPayment">Alfamart</option>
                    </optgroup>
                    <optgroup label="E-Wallet">
                        <option value="GoPay">GoPay</option>
                    </optgroup>
                </select>
            </div>
        </div>
        <button>Lanjutkan Pembayaran</button>
    </form>
  </section>
  `;
};

module.exports = {
  vehicleItem,
  vehicleDetail,
  createLoginPages,
  createRegisterPages,
  createPartnerRegisterPages,
  createCarCollection,
  vehicleCheckin,
};
