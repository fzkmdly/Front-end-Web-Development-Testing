import authorization from '../../data/profileData';
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
      const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
      // Check if loginInfo exists and has the uid property
      if (loginInfo && loginInfo.uid) {
        const uid = loginInfo.uid;
        console.log('UID:', uid);
      } else {
        console.error('UID not found in loginInfo');
      }
      const data = authorization(loginInfo.uid);
      userContainer.innerHTML = userProfilePages(data);
    } catch (error) {
      console.log(error);
    }
  },
};

export default userProfile;
