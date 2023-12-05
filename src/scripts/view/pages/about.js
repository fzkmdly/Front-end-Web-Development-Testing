const About = {
  async render() {
    return `
        <div id="about-us" class="about-us">
          <div class="about-container">
            <h1 class="about-us">Meet Our Team</h1>
            <div class="about-developer-section">
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
        </div>
      `;
  },

  async afterRender() {
  },
};

export default About;
