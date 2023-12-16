import {cardForListRentaled, userHistoryCard, userHistoryPageHead} from '../template/templateCreator';

const userHistoryPage = {
  async render() {
    return `
        <div id="userHistory">

        </div>
    `;
  },

  async afterRender() {
    try {
      const userHistoryContainer = document.getElementById('userHistory');
      userHistoryContainer.innerHTML = userHistoryPageHead();
      const userListContainer = document.getElementById('userHistoryList');
      userListContainer.innerHTML = userHistoryCard();
    } catch (error) {
      console.error(error);
    }
  },
};

export default userHistoryPage;
