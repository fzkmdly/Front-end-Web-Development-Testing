const About = {
  async render() {
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
  },

  async afterRender() {
    // Additional functionality or event listeners can be added here if needed
  },
};

export default About;
