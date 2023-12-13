const vehicleItem = (vehicles) => {
  const availabilityText = vehicles.isAvailable ? 'Tersedia' : 'Tidak Tersedia';
  const costAsNumber = parseFloat(vehicles.vehicleInformation.cost);

  return `
        <a href="#/detail/${vehicles.vehicleId}" class="vehicleItem-clickable">
          <div class="vehicleItem" id="vehicleItem">
            <section class="vehicleItem-left">
              <img class="lazyload" data-src="${vehicles.ImageUrl}" alt="Gambar dari ${vehicles.vehicleInformation.name}" />
            </section>
            <section class="vehicleItem-center">
                <h4 class="vehicle-name">${vehicles.vehicleInformation.brand} ${vehicles.vehicleInformation.name}</h4>
                <h6 class="availability">${availabilityText}</h6>
                <h6 class="city"><i class="fa-solid fa-location-dot"></i>  ${vehicles.locations.join(', ')}</h6>
            </section>
            <section class="vehicleItem-right">
                <h6 class="start-from">Mulai</h6>
                <h4 class="harga">Rp${costAsNumber.toLocaleString('id-ID')}/hari</h4>
            </section>
          </div>
        </a>
    `;
};

const createCarCollection = (vehicles) => {
  const costAsNumber = parseFloat(vehicles.vehicleInformation.cost);

  return `
    <a href="#/detail/${vehicles.vehicleId}" class="car-container">
      <div>
        <section class="car-collection-image">
          <img class="lazyload" data-src="${vehicles.ImageUrl}" alt="Gambar dari ${vehicles.vehicleInformation.name}" />
        </section>
        <section class="car-collection-name">
          <h4 class="car-name">${vehicles.vehicleInformation.brand} ${vehicles.vehicleInformation.name}</h4>
          <h6 class="city"><i class="fa-solid fa-location-dot"></i>  ${vehicles.locations.join(', ')}</h6>
        </section>
        <section class="car-collection-price">
          <h4 class="harga">Rp${costAsNumber.toLocaleString('id-ID')}/hari</h4>
        </section>
      </div>
    </a>
  `;
};


const vehicleDetail = (vehicles) => {
  const imageList = Array.from({length: 3}, (_, index) => `
    <img class="lazyload" data-src="${vehicles.ImageUrl}" alt="Gambar ${index + 1} dari ${vehicles.vehicleInformation.name}" />
  `).join('');
  const costAsNumber = parseFloat(vehicles.vehicleInformation.cost);
  const WhatsAppLink = `https://wa.me/62${vehicles.partner.partnerPhoneNumber}?text=Halo, Bapak/Ibu ${vehicles.partner.partnerName}%0A%0ASaya ingin menyewa ${vehicles.vehicleInformation.brand} ${vehicles.vehicleInformation.name} di web Rent'O`;

  return `
          <article id="vehicleDetail" class="vehicleDetail">
            <div class="vehicleDetailLeft" id="vehicleDetailLeft">
                <div class="detail-top-left">
                    <img class="lazyload" data-src="${vehicles.ImageUrl}" alt="Gambar dari ${vehicles.vehicleInformation.name}" />
                    <h1>${vehicles.vehicleInformation.brand} ${vehicles.vehicleInformation.name}</h1>
                    Tahun: ${vehicles.vehicleInformation.year}
                    <br>
                    <i class="fa-solid fa-person"></i>  ${vehicles.vehicleInformation.seats} Penumpang
                    <br>
                    <i class="fa-solid fa-location-dot"></i>  ${vehicles.locations.join(', ')}
                    <div class="vehicleInfoPrice">
                        <p>Mulai <br>Rp${costAsNumber.toLocaleString('id-ID')}/hari</p>
                        <div class="vehicleDetailOptionRent">
                            <a href="#/checking/${vehicles.vehicleId}" class="sewaButton">Sewa Sekarang</a>
                        </div>
                        <div class="whatsappButton">
                            <a aria-label="Chat on WhatsApp" 
                            href="${WhatsAppLink}" 
                            class="chat" target="_blank"><img alt="Chat on WhatsApp" 
                            src="./images/assets/icons/WhatsApp Button.png" /></a>
                        </div>
                    </div>
                </div>
                <div class="detail-bottom-left">
                    <section class="vehicleDetailInfo" id="vehicleDetailInfo">
                        <div class="vehicleOwnerLeft">
                            <img class="lazyload" data-src="${vehicles.partner.partnerImage}" alt="${vehicles.partner.partnerName}, Pemilik 
                              ${vehicles.vehicleInformation.brand} ${vehicles.vehicleInformation.name}" />
                            <div class="vehicleOwnerInfo">
                                <p>${vehicles.partner.partnerName}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="vehicleDetailRight" id="vehicleDetailRight">
                <section class="vehicleDetailDesc" id="vehicleDetailDesc">
                    <div class="vehicleDetailDescription">
                        <h3>Deskripsi</h3>
                        <p>${vehicles.vehicleInformation.description}</p>
                    </div>
                    <div>
                        <h3>Gambar Mobil</h3>
                        <div class="vehicleDetailPhotolist">
                            ${imageList}
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
    <form id="partnerForm" enctype="application/json">
        <h1>Daftar Partner</h1>
        <div class="form-body">
            <div class="form-column">
            <label for="nama">Nama sesuai KTP:</label>
            <input type="text" id="fullName_KTP" name="fullName_KTP" required>

            <label for="nik">NIK:</label>
            <input type="text" id="nik_KTP" name="nik_KTP" required>
            <span id="nikError" class="error"></span>

            <div class="tempatTanggalLahir">
                <label for="tempatLahir">Tempat</label>
                <label for="tanggalLahir">Tanggal Lahir:</label>
                <input type="text" id="placeBirth_KTP" name="placeBirth_KTP" required>
                <input type="date" id="dateBirth_KTP" name="dateBirth_KTP" min="1960-01-01" max="2010-01-01" required>
            </div>

            <label for="nomorSIM">Nomor SIM:</label>
            <input type="text" id="number_SIM" name="number_SIM" required>

            <label for="masaBerlaku">Masa Berlaku:</label>
            <input type="date" id="expired_SIM" name="expired_SIM" min="2023-01-01" required>

            <label for="jenis-sim">Jenis SIM:</label>
            <select id="jenis-sim">
                <option disabled selected value="">Pilih Jenis SIM</option>
                <option value="A">SIM A</option>
                <option value="B">SIM B</option>
                <option value="C">SIM C</option>
            </select>
            </div>

            <div class="form-column">
            <label for="telepon">Nomor HP:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required>

            <label for="alamat">Alamat:</label>
            <input type="text" id="address_KTP" name="address_KTP" required>

            <label for="kota">Kota:</label>
            <input type="text" id="city_KTP" name="city_KTP" required>

            <label for="provinsi">Provinsi:</label>
            <select id="province_KTP">
                <option disabled selected value="">Pilih Provinsi</option>
                <option value="Aceh">Aceh</option>
                <option value="Bali">Bali</option>
                <option value="Banten">Banten</option>
                <option value="Bengkulu">Bengkulu</option>
                <option value="Gorontalo">Gorontalo</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Jambi">Jambi</option>
                <option value="Jawa Barat">Jawa Barat</option>
                <option value="Jawa Tengah">Jawa Tengah</option>
                <option value="Jawa Timur">Jawa Timur</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Kalimantan Utara">Kalimantan Utara</option>
                <option value="Kepulauan Bangka Belitung">Kepulauan Bangka Belitung</option>
                <option value="Kepulauan Riau">Kepulauan Riau</option>
                <option value="Lampung">Lampung</option>
                <option value="Maluku">Maluku</option>
                <option value="Maluku Utara">Maluku Utara</option>
                <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                <option value="Papua">Papua</option>
                <option value="Papua Barat">Papua Barat</option>
                <option value="Papua Pengunungan">Papua Pengunungan</option>
                <option value="Papua Tengah">Papua Tengah</option>
                <option value="Papua Selatan">Papua Selatan</option>
                <option value="Papua Barat Daya">Papua Barat Daya</option>
                <option value="Riau">Riau</option>
                <option value="Sulawesi Barat">Sulawesi Barat</option>
                <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                <option value="Sulawesi Utara">Sulawesi Utara</option>
                <option value="Sumatera Barat">Sumatera Barat</option>
                <option value="Sumatera Selatan">Sumatera Selatan</option>
                <option value="Sumatera Utara">Sumatera Utara</option>
                <option value="Yogyakarta">Yogyakarta</option>
            </select>

            <label for="kodepos">Kode Pos:</label>
            <input type="text" id="postalCode_KTP" name="postalCode_KTP" required>
            </div>
        </div>

        <button class="partnerButton" type="submit">Daftar Sekarang</button>
    </form>
    `;
};


const vehicleCheckin = (vehicles) =>{
  return `
  <section class="vehicleDetailRenting" id="vehicleDetailRenting">
    <h1 class="title">Detail Rental ${vehicles.vehicleInformation.brand + ' ' + vehicles.vehicleInformation.name}</h1>
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
                <select id="payment-method">
                    <option disabled selected value="">Pilih Metode Pembayaran</option>
                    <optgroup label="Transfer Virtual Account">
                        <option value="BCA Virtual Account">BCA Virtual Account</option>
                        <option value="BNI  Virtual Account">BNI Virtual Account</option>
                        <option value="BRI  Virtual Account">BRI Virtual Account</option>
                        <option value="Permata Virtual Account">Permata Virtual Account</option>
                        <option value="Mandiri  VirtualAccount">Mandiri Virtual Account</option>
                    </optgroup>
                    <optgroup label="Tunai di Gerai Retail">
                        <option value="Indomaret">Indomaret</option>
                        <option value="AlfaMart">Alfamart</option>
                    </optgroup>
                    <optgroup label="E-Wallet">
                        <option value="QRIS">QRIS</option>
                        <option value="GoPay">GoPay</option>
                    </optgroup>
                </select>
            </div>
        </div>
        <button id="insertData-btn">Lanjutkan Pembayaran</button>
    </form>
  </section>
  `;
};

// List of partner's rented vehicles
const partnerAfterRegistation = (vehicles) => {
  return `
      <style>
      /* Add your styles here */
      .listYourRentaled, .listRentaledHistory {
          display: none;
      }

      .active {
          display: flex;
          flex-direction: column;
      }

      .listRentaledToggle,
      .listHistoryToggle {
          cursor: pointer;
          margin: 5px;
          padding: 10px;
          border: 2px solid transparent;
          transition: border 0.3s ease;
          position: relative; /* Add this for positioning the pseudo-element */
      }

      .listRentaledToggle::after,
      .listHistoryToggle::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px; /* Border thickness */
          background: linear-gradient(to right, #080808, #1bda44);
          transition: width 0.3s ease, left 0.3s ease;
      }

      .focused::after {
          width: 100%;
          left: 0;
      }

      .rentaledVehicleInfo 
        p, h4 {
            margin-block: 0;
        }


      .availableInfo {
            display: flex;
            flex-direction: row;
            align-items: center;
            border-radius: 40px;
            border: 1px solid #078080;
        }
        
        .avia-on {
            background-color: #078080;
        }
        
        .availableInfo p {
            padding-inline: 15px;
            padding-block: 10px;
            border-radius: 40px;
            margin-block: 0;
            width: 100%;
        }
    </style>

      <div id="rentaledVehicleContainer" class="rentaledVehicleContainer">
        <section id="rentaledVehicleHeader" class="rentaledVehicleHeader">
            <h2>Partner List Mobil</h2>
            <p>Atur dan sewakan mobilmu dengan<br>Mudah dan Cepat</p>
        </section>
        <section id="listRentaledVehicleContainer" class="listRentaledVehicleContainer">
            <ul>
                <li id="listRentaledToggle" class="listRentaledToggle focused" onclick="showListRentaled()">List Mobil</li>
                <li id="listHistoryToggle" class="listHistoryToggle" onclick="showRentedHistory()">Riwayat Sewa</li>
            </ul>
            <div id="listYourRentaled" class="listYourRentaled active">
                <div class="listRentaledVehicle" id="listRentaledVehicle">
                    <section class="rentaledVehicle">
                        <img src="https://i.pinimg.com/564x/77/81/68/778168720cc2c34747b330e0d95ff389.jpg" alt="">
                        <div class="rentaledVehicleInfo">
                            <h4>Ryo Yamada</h4>
                            <p>Waifuku</p>
                        </div>
                        <div class="availableInfo">
                            <p class="available avia-on">Available</p>
                            <p class="unavailabe">Unavailable</p>
                        </div>
                        <i class="fa-solid fa-trash fa-2xl" style="color: #f45d48;"></i>
                    </section>
                </div>
                <div id="addRentaledVehicle" class="addRentaledVehicle">
                    <a href="#/addVehicle">
                        <img src="./images/icons/partner-page-icon/Group 37010.png" alt="">
                    </a>
                </div>
            </div>
            <div id="listRentaledHistory" class="listRentaledHistory">
                <section class="rentaledHistory">
                    <img src="https://i.pinimg.com/736x/2c/61/d5/2c61d5d2790e1f902ecc15e63534a950.jpg" alt="">
                    <div class="rentaledVehicleInfo">
                        <h4>Ryo Yamada</h4>
                        <p>Waifuku</p>
                    </div>
                    <div>
                        <p>Mulai dari</p>
                        <h5>Rp. 150.000/Hari</h5>
                    </div>
                </section>
            </div>
        </section
      </div>
  `;
};

// History of rented vehicles
const cardForListRentaled = () => {
  return `
    <section class="rentaledHistory">
        <img src="https://pbs.twimg.com/media/GA0ybC5bQAADN6t?format=jpg&name=4096x4096" alt="">
        <div class="rentaledVehicleInfo">
            <h4>Hiroi Kikuri</h4>
            <p>Waifuku</p>
        </div>
        <div class="availableInfo">
            <p class="available avia-on">Available</p>
            <p class="unavailabe">Unavailable</p>
        </div>
        <i class="fa-solid fa-trash fa-2xl" style="color: #f45d48;"></i>
    </section>
    `;
};

const userProfilePages = (userData) => {
  return `
    <div class="userContainer" id="userContainer">
        <h1>Detail Akun</h1>
        <section class="topUserProfile" id="topUserProfile">
            <div class="userProfilePicture">
                <img src="${userData.urlImage}" width="200px" alt="oke">
            </div>
            <button id="editProfilePictureButton">Ganti Foto Profil</button>
            <h2 class="name">${userData.username.toUpperCase()}</h2>
            <h3 class="email">${userData.email}</h3>
            <p>Anda adalah <b>${userData.roles.join(', dan ')}</b></p>
        </section>
        <section class="bodyUserProfile" id="bodyUserProfile">
            <a href="">
                <div class="userEditProfile profileOption">
                    <img src="./images/icons/userProfile-page/VectorEdit.png" alt="">
                    <h5>Edit Profile</h5>
                </div>
            </a>
            <a href="#/">
                <div class="RentHistoBttn profileOption">
                    <img src="./images/icons/userProfile-page/Car-V8.png" alt="">
                    <h5>Riwayat Sewa Mobil</h5>
                </div>
            </a>
            <a href="" style="display: none;">
                <div class="RentaledHistoBttn profileOption">
                    <img src="./images/icons/userProfile-page/Car-Maintenance.png" alt="">
                    <h5>Riwayat Penyewaan Mobil</h5>
                </div>
            </a>
            <a href="">
                <div class="logOutBttn profileOption">
                    <img src="./images/icons/userProfile-page/Logout.png" alt="">
                    <h5>Log Out</h5>
                </div>
            </a>
        </section>
    </div>
    `;
};

const createSearchBar = () => {
  return `
        <div class="search-bar" id="search-bar">
            <h1>Penyewaan</h1>
            <p>Pilih waktu, lokasi, 
                dan jenis kendaraan yang ingin digunakan. 
                Nikmati perjalanan menyenangkan dengan layanan Rent'O.
            </p>
            <form action="" method="post" class="rental-option">
                <div class="rental-leftSide" id="rental-leftSide">
                    <label for="vehicle-location">Lokasi Kendaraan</label>
                    <label for="vehicle-type">Tipe Kendaraan</label>
                    <label for="vehicle-brand">Merek</label>
                    <select id="vehicle-location">
                        <option disabled selected value="">Pilih Lokasi</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value="Bogor">Bogor</option>
                        <option value="Depok">Depok</option>
                        <option value="Tangerang">Tangerang</option>
                        <option value="Bekasi">Bekasi</option>
                    </select>
                    <select id="vehicle-type">
                        <option disabled selected value="">Pilih Tipe Kendaraan</option>
                        <option value="Mobil">Mobil</option>
                        <option value="Motor">Motor</option>
                    </select>
                    <select id="vehicle-brand">
                        <option disabled selected value="">Pilih Merek</option>
                        <option value="Daihatsu">Daihatsu</option>
                        <option value="Honda">Honda</option>
                        <option value="Toyota">Toyota</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Hyundai">Hyundai</option>
                    </select>
                </div>
            </form>
            <button type="submit" id="submitRentalOption">Cari</button>
        </div>
    `;
};

const addRentalVehicle = () => {
  return `
        <form id="addVehicleForm">
            <h1>Data Mobil</h1>
            <div class="inputFotoMobil">
                <div id="imagePreviewContainer" class="imagePreviewContainer">
                    <img src="https://i.pinimg.com/564x/00/00/5f/00005f2792a21e1b29d08638dc3d1027.jpg" id="imagePreview" alt="Pratinjau Gambar" width="150px">
                </div>
                <div class="inputFotoMobilContainer">
                    <!-- <img src="./src/public/images/icons/partner-page-icon/Vector.png" width="100px" alt="" srcset=""> -->
                    <input type="file" name="file" id="vehicleImage" accept="image/png, image/jpeg" onchange="previewImage()" >
                </div>
            </div>
            <div class="bodyInputMobil">
                <div class="bodyInputMobilLeft">
                    <div class="add-pages-form-group">
                        <label for="brand">Merek Kendaraan</label>
                        <select id="brand">
                            <option disabled selected value="">Pilih Merek</option>
                            <option value="Daihatsu">Daihatsu</option>
                            <option value="Honda">Honda</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="Mitsubishi">Mitsubishi</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Hyundai">Hyundai</option>
                        </select>
                    </div>
                    <div class="add-pages-form-group">
                        <label for="platMobil">Nomor Pelat Kendaraan</label>
                        <input type="text" id="plateNumber" name="plateNumber" placeholder="Contoh: B1234PP">
                    </div>
                    <div class="add-pages-form-group">
                        <label for="stnk">STNK</label>
                        <input type="text" id="stnk" name="stnk">
                    </div>
                    <div class="add-pages-form-group">
                        <label for="tipe-kendaraan">Tipe Kendaraan</label>
                        <select id="type">
                            <option disabled selected value="">Pilih Tipe Kendaraan</option>
                            <option value="Mobil">Mobil</option>
                            <option value="Motor">Motor</option>
                        </select>
                    </div>
                </div>
                <div class="bodyInputMobilRight">
                    <div class="add-pages-form-group">
                        <label for="namaMobil">Seri</label>
                        <input type="text" id="name" name="name" placeholder="Contoh: Agya, Ayla">
                    </div>
                    <div class="add-pages-form-group">
                        <label for="tahunKeluaran">Tahun</label>
                        <input type="number" id="year" name="year" placeholder="Contoh: 2023">
                    </div>
                    <div class="add-pages-form-group">
                        <label for="bpkb">BPKB</label>
                        <input type="text" id="bpkb" name="bpkb">
                    </div>
                    <div class="add-pages-form-group">
                        <label for="maxPenumpang">Maksimum Penumpang</label>
                        <select id="seats" name="seats">
                            <option disabled selected value="">Pilih Maksimum Penumpang</option>
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="7">7</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="addVehicleDesc">
                <label for="deskripsi">Deskripsi</label>
                <textarea id="description" name="description" rows="4" placeholder="Deskripsikan secara singkat"></textarea>
            </div>
            <div class="footerAddForm" id="footerAddForm">
                <div class="hargaSewaForm">
                    <div class="add-pages-form-group">
                        <label for="hargaSewa">Biaya Sewa</label>
                        <div class="input-group">
                            <span class="rupiah-symbol">Rp</span>
                            <input type="float" id="cost" name="cost" placeholder="Contoh: 150.000">
                        </div>
                    </div>
                </div>
                <div class="addAlamatForm">
                    <section class="addAlamatFormLeft">
                        <div class="add-pages-form-group">
                            <label for="lokasi">Lokasi</label>
                            <select id="location">
                                <option disabled selected value="">Pilih Lokasi</option>
                                <option value="Jakarta">Jakarta</option>
                                <option value="Bogor">Bogor</option>
                                <option value="Depok">Depok</option>
                                <option value="Tangerang">Tangerang</option>
                                <option value="Bekasi">Bekasi</option>
                            </select>
                        </div>
                    </section>
                </div>
                <div class="addAlamatForm">
                    <section class="addAlamatFormLeft">
                        <div class="add-pages-form-group">
                            <label for="alamat">Alamat</label>
                            <textarea name="address" id="address" rows="4" placeholder="Masukkan alamat Anda secara lengkap"></textarea>
                        </div>
                    </section>
                </div>
            </div>
            <button type="submit" class="buttonTambahMobil">Tambahkan Mobil</button>
        </form>
    `;
};

const paymentCheck = (sessionDatas, vehicles) => {
  const timeCost = sessionDatas.selisihHari * parseFloat(vehicles.vehicleInformation.cost);
  return `
        <style>
            .paymentInfo{
                width: 100%;
            }

            .paymentInfo form {
                background-color: #F8F5F2;
                border-radius: 8px;
                margin-inline: 175px;
                padding-inline: 15px;
            }

            .paymentInfo form h2 {
                text-align: center;
                padding-top: 10px;
            }

            .paymentBody {
                display: block;
            }

            .paymentBodyDesc {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-block: 10px;
            }

            .paymentBodyDescName{
                margin-inline: 5px;
            }

            .paymentBodyDescName p{
                margin: 0;
            }

            .paymentBodyDateIndex {
                width: 100%;
            }

            .payment-form-group,
            .paymentTotalCheck {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-block: 5px;
            }

            .paymentBody input {
                width: 250px;
                height: 25px;
                background-color: #F8F5F2;
                border: none;
                outline: none;
            }

            form .paymentConfirm {
                cursor: pointer;
                padding-inline: 40px;
                padding-block: 10px;
                border-radius: 20px;
                color: white;
                background-color: #F45D48;
                border: 1px solid #F45D48;
                margin-top: 20px;
                margin-bottom: 10px;
            }
        </style>


        <form action="">
            <h2>Detail Pembayaran</h2>
            <section id="paymentBody" class="paymentBody">
                <div class="paymentBodyDesc">
                    <img src="${vehicles.ImageUrl}" alt="" width="75px" style="border-radius: 10px;">
                    <section class="paymentBodyDescName">
                        <p><b>${vehicles.vehicleInformation.brand + ' ' + vehicles.vehicleInformation.name}</b></p>
                        <p>${vehicles.partner.partnerName}</p>
                    </section>
                </div>
                <div id="paymentBodyDateIndex" class="paymentBodyDateIndex">
                    <div class="payment-form-group">
                        <label for="lokPenyewaan">Lokasi Penyewaan:</label>
                        <input type="text" value="${vehicles.locations}" id="lokPenyewaan" name="lokPenyewaan" readonly>
                    </div>
                    <div class="payment-form-group">
                        <label for="tglMulai">Tanggal Mulai :</label>
                        <input type="date" id="tanggalMulai" name="tanggalMulai" value="${sessionDatas.startDate}" readonly>
                    </div>
                    <div class="payment-form-group">
                        <label for="tglAkhir">Tanggal Selesai : </label>
                        <input type="date" id="tanggalSelesai" name="tanggalSelesai" value="${sessionDatas.endDate}" readonly>
                    </div>
                </div>
                <hr>
                <div id="paymentBodyCheckIndex" class="paymentBodyCheckIndex">
                    <div class="payment-form-group">
                        <label for="lokPenjemputan">Lokasi Penjemputan :</label>
                        <input type="text" id="lokPenjemputan" name="lokPenjemputan" value="${sessionDatas.pickupLocation}" readonly>
                    </div>
                    <div class="payment-form-group">
                        <label for="waktuPenjemputan">Waktu Penjemputan :</label>
                        <input type="time" id="waktuPenjemputan" name="waktuPenjemputan" value="${sessionDatas.pickupTime}" readonly>
                    </div>
                    <div class="payment-form-group">
                        <label for="lokPengantaran">Lokasi Pengantaran :</label>
                        <input type="text"  id="lokPengantaran" name="lokPengantaran" value="${sessionDatas.deliveryLocation}" readonly>
                    </div>
                    <div class="payment-form-group">
                        <label for="waktuPengantaran">Waktu Pengantaran :</label>
                        <input type="time" id="waktuPengantaran" name="waktuPengantaran" value="${sessionDatas.deliveryTime}" readonly>
                    </div>
                </div>
                <hr>
                <div id="paymentTotalCheck" class="paymentTotalCheck">
                    <label for="paymentIndexes">${sessionDatas.selisihHari} hari x 1 mobil</label>
                    <input type="text" id="paymentCheck" name="paymentCheck" value="Rp${timeCost.toLocaleString('id-ID')}" readonly>
                </div>
            </section>
            <button class="paymentConfirm">Bayar Sekarang</button>
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
  vehicleCheckin,
  partnerAfterRegistation,
  cardForListRentaled,
  userProfilePages,
  createSearchBar,
  addRentalVehicle,
  paymentCheck,
};
