import {addRentalVehicle} from '../template/templateCreator';
import axios from 'axios';
import API_ENDPOINT from '../../globals/api-endpoint';
import Swal from 'sweetalert2/dist/sweetalert2.all.min';

const addVehicle = {
  async render() {
    return `
      <div id="addYourVehicle" class="addYourVehicle">
      </div>
    `;
  },

  async afterRender() {
    const addFormVehicleContainer = document.getElementById('addYourVehicle');
    try {
      addFormVehicleContainer.innerHTML += addRentalVehicle();

      // Add event listener to the form for handling submission
      const addVehicleForm = document.getElementById('addVehicleForm');
      addVehicleForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData();

        // Add image file to FormData
        const fileInput = document.getElementById('vehicleImage');
        const file = fileInput.files[0];
        if (file) {
          formData.append('vehicleImage', file);
        }

        // Add other form data to FormData (replace 'name' with actual field names)
        formData.append('name', document.getElementById('name').value);
        formData.append('description', document.getElementById('description').value);
        formData.append('plateNumber', document.getElementById('plateNumber').value);
        formData.append('stnk', document.getElementById('stnk').value);
        formData.append('type', document.getElementById('type').value);
        formData.append('brand', document.getElementById('brand').value);
        formData.append('year', document.getElementById('year').value);
        formData.append('bpkb', document.getElementById('bpkb').value);
        formData.append('seats', document.getElementById('seats').value);
        formData.append('cost', document.getElementById('cost').value);
        formData.append('location', document.getElementById('location').value);
        formData.append('address', document.getElementById('address').value);

        // Retrieve Bearer token from local storage
        const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || {};
        const accessToken = loginInfo.uid || '';

        try {
          const response = await axios.post(API_ENDPOINT.CREATE_CAR, formData, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'multipart/form-data', // Set content type for FormData
            },
          });

          // Check if the request was successful
          if (response.status === 200) {
            Swal.fire({
              title: 'Sukses',
              text: 'Kendaraan berhasil ditambahkan!',
              icon: 'success',
            }).then(() => {
              location.reload();
            });
          } else {
            Swal.fire({
              title: 'Kesalahan',
              text: `Gagal menambahkan kendaraan: ${response.data.message}`,
              icon: 'error',
            });
          }
        } catch (error) {
          Swal.fire({
            title: 'Kesalahan',
            text: `Gagal menambahkan kendaraan: ${error.message}`,
            icon: 'error',
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default addVehicle;
