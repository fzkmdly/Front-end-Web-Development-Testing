import CarDbSource from '../../data/data-source';
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
      // Fetch user profile data using the integrated method
      const userData = await CarDbSource.getUserProfile();

      // Generate the HTML content for user profile using the template
      const userProfileContent = userProfilePages(userData);

      // Render the generated content inside the userProfile element
      const userProfileElement = document.getElementById('userProfile');
      userProfileElement.innerHTML = userProfileContent;
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

export default userProfile;
