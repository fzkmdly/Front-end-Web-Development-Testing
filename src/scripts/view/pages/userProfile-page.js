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
      const loginInfo = localStorage.getItem('loginInfo');
      if (!loginInfo) {
        Swal.fire({
          icon: 'info',
          title: 'Anda belum login',
          text: 'Mohon login untuk mengakses halaman ini.',
          showCancelButton: true,
          confirmButtonText: 'Log In',
          cancelButtonText: 'Batal',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.hash = '#/login';
          }
        });

        return;
      }

      const userData = await CarDbSource.getUserProfile();

      const userProfileContent = userProfilePages(userData);

      const userProfileElement = document.getElementById('userProfile');
      userProfileElement.innerHTML = userProfileContent;

      const editProfilePictureButton = document.getElementById('editProfilePictureButton');
      editProfilePictureButton.addEventListener('click', async () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.click();

        fileInput.addEventListener('change', async (event) => {
          const file = event.target.files[0];

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
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: errorMessage,
              });
              return;
            }

            const userProfileData = await response.json();
            userData.urlImage = userProfileData.urlImage;

            const updatedUserProfileContent = userProfilePages(userData);
            userProfileElement.innerHTML = updatedUserProfileContent;

            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Foto profil berhasil diubah!',
            });
          } catch (error) {
            console.error(error);
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
