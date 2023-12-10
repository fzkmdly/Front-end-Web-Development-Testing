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
                            <a href="#/checking/${vehicles.vehicleId}">Sewa Sekarang</a>
                            <a href="https://wa.me/62${vehicles.partner.partnerPhoneNumber}?text=Saya ingin menyewa ${vehicles.vehicleInformation.brand} ${vehicles.vehicleInformation.name} di web Rent'O" class="chat" target="_blank">Chat</a>
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


                <label for="telepon">Nomor HP:</label>
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

const addRentalVehicle = () => {
  return `
        <form action="" method="post">
            <h1>Data Mobil</h1>
            <div class="inputFotoMobil">
                <div id="imagePreviewContainer" class="imagePreviewContainer">
                    <img src="https://i.pinimg.com/564x/00/00/5f/00005f2792a21e1b29d08638dc3d1027.jpg"  id="imagePreview" alt="Pratinjau Gambar" width="150px">
                </div>
                <div class="inputFotoMobilContainer">
                    <!-- <img src="./src/public/images/icons/partner-page-icon/Vector.png" width="100px" alt="" srcset=""> -->
                    <input type="file" id="fileInput" accept="image/*" onchange="previewImage()" >
                </div>
            </div>
            <div class="bodyInputMobil">
                <div class="bodyInputMobilLeft">
                    <div class="add-pages-form-group">
                        <label for="brand">Merek Kendaraan</label>
                        <input type="text" id="brand" name="brand" placeholder="Contoh: Honda, Toyota" required>
                    </div>
                    <div class="add-pages-form-group">
                        <label for="platMobil">Nomor Pelat Kendaraan</label>
                        <input type="text" id="platMobil" name="platMobil" placeholder="Contoh: B1234PP" required>
                    </div>
                    <div class="add-pages-form-group">
                        <label for="stnk">STNK</label>
                        <input type="text" id="stnk" name="stnk" required>
                    </div>
                    <div class="add-pages-form-group">
                        <label for="tipeMobil">Tipe Kendaraan</label>
                        <input type="text" id="tipeMobil" name="tipeMobil" required>
                    </div>
                </div>
                <div class="bodyInputMobilRight">
                    <div class="add-pages-form-group">
                        <label for="namaMobil">Seri</label>
                        <input type="text" id="namaMobil" name="namaMobil" placeholder="Contoh: Agya, Ayla" required>
                    </div>
                    <div class="add-pages-form-group">
                        <label for="tahunKeluaran">Tahun</label>
                        <input type="text" id="tahunKeluaran" name="tahunKeluaran" placeholder="Contoh: 2023" required>
                    </div>
                    <div class="add-pages-form-group">
                        <label for="bpkb">BPKB</label>
                        <input type="text" id="bpkb" name="bpkb" required>
                    </div>
                    <div class="add-pages-form-group">
                        <label for="maxPenumpang">Maksimum Penumpang</label>
                        <input type="text" id="maxPenumpang" name="maxPenumpang" placeholder="Contoh: 4" required>
                    </div>
                </div>
            </div>
            <div class="addVehicleDesc">
                <label for="deskripsi">Deskripsi Mobil</label>
                <textarea id="deskripsi" name="deskripsi" rows="4" placeholder="Deskripsikan mobil Anda secara singkat" required></textarea>
            </div>
            <div class="footerAddForm" id="footerAddForm">
                <div class="hargaSewaForm">
                    <div class="add-pages-form-group">
                        <label for="hargaSewa">Harga Sewa</label>
                        <input type="text" id="hargaSewa" name="hargaSewa" placeholder="Contoh: 150000" required>
                    </div>
                </div>
                <div class="addAlamatForm">
                    <section class="addAlamatFormLeft">
                        <div class="add-pages-form-group">
                            <label for="alamat">Alamat</label>
                            <textarea name="alamat" id="alamat" rows="4" placeholder="Masukkan alamat Anda secara lengkap"></textarea>
                        </div>
                    </section>
                </div>
            </div>
            <button class="buttonTambahMobil">Tambahkan Mobil</button>
        </form>
  `;
};

const partnerAfterRegistation = (vehicle) => {
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

const cardForListRentaled = () => {
  return `
    <section class="rentaledHistory">
        <img src="https://i.pinimg.com/736x/2c/61/d5/2c61d5d2790e1f902ecc15e63534a950.jpg" alt="">
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

const userProfilePages = (user) => {
  return `
    <div class="userContainer" id="userContainer">
        <h1>Akun User</h1>
        <section class="topUserProfile" id="topUserProfile">
            <img src="${user.urlImage}" width="200px" alt="oke">
            <h3>${user.username}</h3>
            <p>Penyewa</p>
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
    <style>
        .userProfile {
            width: 100%;
        }

        .userContainer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .topUserProfile {
            text-align: center;
        }

        .topUserProfile img {
            border-radius: 100%;
        }

        .bodyUserProfile {
            background-color: #F8F5F2;
            border-radius: 10px;
            padding-inline: 25px;
            padding-block: 15px;
            width: 250px;
        }

        .bodyUserProfile a {
            text-decoration: none;
            color: black;
        }

        .profileOption:hover {
            box-shadow: 0px 0px 2px black;
        }

        .profileOption {
            display: flex;
            flex-direction: row;
            border-radius: 10px;
            background-color: white;
            align-items: center;
            margin-block: 8px;
            width: 100%;
        }

        .profileOption img {
            width: 20px;
            margin-block: 0;
            margin-inline: 5px;
        }
    </style>
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
  addRentalVehicle,
  partnerAfterRegistation,
  cardForListRentaled,
  userProfilePages,
};
