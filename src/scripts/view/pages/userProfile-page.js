import CarDbSource from '../../data/data-source';
import {userProfilePages} from '../template/templateCreator';
import API_ENDPOINT from '../../globals/api-endpoint';
import Swal from 'sweetalert2/dist/sweetalert2.all.min';

const userProfile = {
  async render() {
    return `
      <div id="userProfile" class="userProfile"></div>
    `;
  },

  async afterRender() {
    try {
      // Check if the user is logged in
      const loginInfo = localStorage.getItem('loginInfo');
      if (!loginInfo) {
        alert('Please log in to view the user profile.');
        return;
      }

      // Fetch user profile data using the integrated method
      const userData = await CarDbSource.getUserProfile();

      const userProfileContent = userProfilePages(userData);

      // Render the generated content inside the userProfile element
      const userProfileElement = document.getElementById('userProfile');
      userProfileElement.innerHTML = userProfileContent;

      const editProfilePictureButton = document.getElementById('editProfilePictureButton');
      editProfilePictureButton.addEventListener('click', async () => {
        // Open file selection dialog
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.click();

        // Handle file selection
        fileInput.addEventListener('change', async (event) => {
          const file = event.target.files[0];

          // Upload the selected image file using API
          const formData = new FormData();
          formData.append('image', file);

          try {
            const response = await fetch(API_ENDPOINT.UPLOAD_PROFILE_IMAGE, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${CarDbSource.getAccessToken()}`,
              },
              body: formData,
            });

            if (!response.ok) {
              const errorResponse = await response.json();
              const errorMessage = errorResponse.message || 'Error: gagal mengubah foto profil!';
              // Show error message using SweetAlert
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage,
              });
              return;
            }

            // Update the user profile data with the new image URL
            const userProfileData = await response.json();
            userData.urlImage = userProfileData.urlImage;

            // Rerender the user profile with the updated data
            const updatedUserProfileContent = userProfilePages(userData);
            userProfileElement.innerHTML = updatedUserProfileContent;

            // Show success message using SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Foto profil berhasil diubah!',
            });
          } catch (error) {
            console.error(error);
            // Show error message using SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Error: terjadi kesalahan saat mengunggah foto!',
            });
          }
        });
      });
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

export default userProfile;
