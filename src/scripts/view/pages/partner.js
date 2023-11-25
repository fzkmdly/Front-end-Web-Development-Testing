import {createPartnerRegisterPages} from '../template/templateCreator';

const Partner = {
  async render() {
    return `
          <div class="partnerPages" id="partnerPages">
            <section class="partnerHeader" id="partnerHeader">
                <p id="upperTagline">Jadilah Partner Rent'O</p>
                <p id="lowerTagline">Mobilmu Gayamu</p>
            </section>
            <div class="banner">
            <h2>Produktifkan Kendaraan Anda</h2>
            <p class="second-tagline">Bergabunglah menjadi partner Rent'</p>
            <div class="cards-container">
            </div>
            </div>
            <section class="partnerForm" id="partnerForm">
                
            </section>
          </div>
        `;
  },

  async afterRender() {
    try {
      const formContainer = document.getElementById('partnerForm');
      formContainer.innerHTML += createPartnerRegisterPages();
    } catch (error) {
      console.log(error);
    }
  },
};

export default Partner;
