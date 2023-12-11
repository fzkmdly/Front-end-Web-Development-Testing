import CarDbSource from '../../data/data-source';
import {userProfilePages} from '../template/templateCreator';
import API_ENDPOINT from '../../globals/api-endpoint';

const userProfile = {
  async render() {
    return `
      <div id="userProfile" class="userProfile"></div>
    `;
  },

  async afterRender() {
    try {
      // Fetch user profile data using the integrated method
      const userData = await CarDbSource.getUserProfile();

      // Generate the HTML content for user profile using the template
      const userProfileContent = userProfilePages(userData);

      // Render the generated content inside the userProfile element
      const userProfileElement = document.getElementById('userProfile');
      userProfileElement.innerHTML = userProfileContent;

      // Add event listener for edit profile button
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
              alert(errorMessage);
              return;
            }

            // Update user profile data with the new image URL
            const userProfileData = await response.json();
            userData.urlImage = userProfileData.urlImage;

            // Rerender the user profile with the updated data
            const updatedUserProfileContent = userProfilePages(userData);
            userProfileElement.innerHTML = updatedUserProfileContent;

            // Show success message
            alert('Foto profil berhasil diubah!');
          } catch (error) {
            console.error(error);
            alert('Error: terjadi kesalahan saat mengunggah foto!');
          }
        });
      });
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

export default userProfile;
