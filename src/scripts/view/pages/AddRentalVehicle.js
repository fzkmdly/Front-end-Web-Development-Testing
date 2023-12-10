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

        const fileInput = document.getElementById('vehicleImage');
        const file = fileInput.files[0];

        if (!file) {
          console.error('No file selected');
          return;
        }

        const reader = new FileReader();

        reader.onload = async function(e) {
          const imageDataURL = e.target.result;

          // Retrieve Bearer token from local storage
          const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || {};
          const accessToken = loginInfo.uid || '';

          // Make the API request with imageDataURL
          try {
            const response = await fetch(API_ENDPOINT.CREATE_CAR, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data', // Change the Content-Type if needed
              },
              body: JSON.stringify({image: imageDataURL /* other form data */}),
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
        };

        reader.readAsDataURL(file);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default addVehicle;
