import Swal from 'sweetalert2';
import {
  cardForListRentaled,
  createPartnerRegisterPages,
  partnerAfterRegistation,
} from '../template/templateCreator';

const Partner = {
  async render() {
    // Check if the user is logged in
    const isLoggedIn = checkUserLoggedIn();

    // If the user is not logged in, show a SweetAlert2 popup
    if (!isLoggedIn) {
      Swal.fire({
        title: 'Anda belum login',
        text: 'Mohon login untuk mengakses halaman ini',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Log In',
        cancelButtonText: 'Batal',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '#/login';
        } else {
          window.location.href = '#/';
        }
      });

      return '';
    }

    // Read the login information from localStorage
    const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || {};
    const userRoles = loginInfo.roles || [];

    // Check if the user has the "Partner" role
    const isPartner = userRoles.includes('Partner');

    // If the user has the "Partner" role, render the page
    if (isPartner) {
      return `
        <div class="partnerPages" id="partnerPages">
          <section class="partnerHeader" id="partnerHeader">
            <p id="upperTagline">Jadilah Partner Rent'O</p>
            <p id="lowerTagline">Mobilmu Gayamu</p>
          </section>
          <div class="banner">
            <h2>Produktifkan Kendaraan Anda</h2>
            <p class="second-tagline">Bergabunglah menjadi partner Rent'</p>
            <div class="cards-container"></div>
          </div>
          <section class="partnerForm" id="partnerForm"></section>
        </div>
      `;
    }

    // If the user does not have the "Partner" role, show the registration form
    return `
      <div class="partnerForm" id="partnerForm">
        ${createPartnerRegisterPages()}
      </div>
    `;
  },

  async afterRender() {
    try {
      // Check if the user is logged in
      const isLoggedIn = checkUserLoggedIn();

      // If the user is not logged in, handle accordingly (e.g., redirect to login page)
      if (!isLoggedIn) {
        return;
      }

      // Read the login information from localStorage
      const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || {};
      const userRoles = loginInfo.roles || [];

      // Check if the user is a partner
      const isPartner = userRoles.includes('Partner');

      // Do not proceed with rendering if the user is a partner
      if (isPartner) {
        const formContainer = document.getElementById('partnerForm');
        formContainer.innerHTML = partnerAfterRegistation();

        const listRentaledContainer = document.getElementById('listRentaledVehicle');
        listRentaledContainer.innerHTML += cardForListRentaled();
      } else {
        // If the user does not have the "Partner" role, show the registration form
        const registrationFormContainer = document.getElementById('partnerForm');
        registrationFormContainer.innerHTML = createPartnerRegisterPages();
      }
    } catch (error) {
      console.log(error);
    }
  },
};

// Function to check if the user is logged in (example implementation)
function checkUserLoggedIn() {
  return localStorage.getItem('loginInfo') !== null;
}

export default Partner;
