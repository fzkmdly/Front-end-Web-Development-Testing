class rentalBar extends HTMLElement {
  connectedCallback() {
    this.render();
  };

  render() {
    this.innerHTML = `
        <div class="rental-bar" id="rental-bar">
            <h1>Penyewaan</h1>
            <p>Pilih waktu, lokasi, 
                dan jenis kendaraan yang ingin digunakan. 
                Nikmati perjalanan menyenangkan dengan layanan Rent’O
            </p>
            <form action="" method="post" class="rental-option">
                <div class="rental-leftSide" id="rental-leftSide">
                    <label for="lokasiPenyewaan">Lokasi Penyewaan</label>
                    <label for="tanggalMulai">Tanggal</label>
                    <label for="tanggalSelesai">Tanggal Selesai</label>
                    <input type="text" id="lokasiSewa" name="LokasiSewa" placeholder="Masukan Lokasi" required>
                    <input type="date" name="tanggalMulai" id="tanggalMulai" required>
                    <input type="date" name="tanggalSelesai" id="tanggalSelesai" required>
                </div>
                <button type="submit" id="submitRentalOption">Cari</button>
            </form>
        </div>
        `;
  };
};

customElements.define('rental-bar', rentalBar);
