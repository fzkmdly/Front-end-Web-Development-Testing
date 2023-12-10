import axios from 'axios';
import API_ENDPOINT from '../../globals/api-endpoint';
import {userProfilePages} from '../template/templateCreator';

const userProfile = {
  async render() {
    return `
        <div id="userProfile" class="userProfile">
        </div>
        `;
  },

  async afterRender() {
    try {
      const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || {};
      const accessToken = loginInfo.uid || '';

      // Fetch user profile data using the access token
      const response = await axios.get(API_ENDPOINT.PROFILE, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status >= 200 && response.status < 300) {
        const userData = response.data;

        // Ensure that userData.data.user contains the expected structure
        if (userData && userData.data && userData.data.user) {
          // Generate the HTML content for user profile using the template
          const userProfileContent = userProfilePages(userData.data.user);

          // Render the generated content inside the userProfile element
          const userProfileElement = document.getElementById('userProfile');
          userProfileElement.innerHTML = userProfileContent;
        } else {
          console.error('Invalid user profile data structure:', userData);
        }
      } else {
        console.error('Failed to fetch user profile:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

export default userProfile;
