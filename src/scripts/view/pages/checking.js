import CarDbSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import {vehicleCheckin} from '../template/templateCreator';

const Checking = {
  async render() {
    return `
        <div class="checking-page" id="checking-page">

        </div>
    `;
  },

  async afterRender() {
    try {
      const checkingContainer = document.getElementById('checking-page');
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const vehicleData = await CarDbSource.detailCar(url.id);

      checkingContainer.innerHTML += vehicleCheckin(vehicleData);
    } catch (error) {
      console.log(error);
    }
  },
};

export default Checking;
