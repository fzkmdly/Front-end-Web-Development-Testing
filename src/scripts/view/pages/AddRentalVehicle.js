import {addRentalVehicle} from '../template/templateCreator';
import API_ENDPOINT from '../../globals/api-endpoint';

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

        const formData = new FormData(); // Create a FormData object

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

        // Make the API request with FormData
        try {
          const response = await fetch(API_ENDPOINT.CREATE_CAR, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
            body: formData,
          });

          // Check if the request was successful
          if (response.ok) {
            const result = await response.json();
            console.log('Vehicle added successfully:', result);
            // Optionally, you can redirect or perform other actions upon success
          } else {
            // Handle error response
            console.error('Failed to add vehicle:', response.statusText);
          }
        } catch (error) {
          console.error('Error adding vehicle:', error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default addVehicle;
