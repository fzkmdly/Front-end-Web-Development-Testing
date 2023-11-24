const Partner = {
  async render() {
    return `
          <div class="partnerPages" id="partnerPages">
            <section class="partnerHeader" id="partnerHeader">
                <h3>Jadilah Partner Rent'O</h3>
                <h1>Mobilmu Gayamu</h1>
            </section>
            <section class="partnerForm" id="partnerForm">
                <form action="#" method="post">
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

                        <label for="telepon">Telepon:</label>
                        <input type="tel" id="telepon" name="telepon" required>

                        <label for="kodepos">Kode Pos:</label>
                        <input type="text" id="kodepos" name="kodepos" required>

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                  </div>

                    <button class="partnerButton" type="submit">Daftar Sekarang</button>
                </form>
            </section>
          </div>
        `;
  },

  async afterRender() {
    try {

    } catch (error) {

    }
  },
};

export default Partner;
