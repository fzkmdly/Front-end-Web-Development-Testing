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
      const userContainer = document.getElementById('userProfile');
      userContainer.innerHTML = userProfilePages();
    } catch (error) {
      console.log(error);
    }
  },
};

export default userProfile;
