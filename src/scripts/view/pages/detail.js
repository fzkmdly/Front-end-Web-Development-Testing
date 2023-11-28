import CarDbSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import {vehicleDetail} from '../template/templateCreator';

const Detail = {
  async render() {
    return `
    <div class="vehicle-detail-page" id="vehicle-detail-page">
    </div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const vehicleData = await CarDbSource.detailCar(url.id);

      const detailContainer = document.getElementById('vehicle-detail-page');
      if (vehicleData === undefined) {
        detailContainer.innerHTML = '<h2>Data mobil tidak dapat ditemukan</h2>';
      }
      detailContainer.innerHTML = vehicleDetail(vehicleData);
    } catch (error) {
      console.log(error);
    }
  },
};

export default Detail;
