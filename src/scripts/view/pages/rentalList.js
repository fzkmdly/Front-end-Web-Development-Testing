import CarDbSource from '../../data/data-source';
import {vehicleItem} from '../template/templateCreator';

const Sewa = {
  async render() {
    return `
      <div id="sewa-page" class="sewa-page">
        <header>
          <rental-bar></rental-bar>
        </header>
        <div id="vehicle-sewa-list" class="vehicle-sewa-list">
          <h1>Temukan Kendaraan Pilihan Anda</h1>
          <div class="vehicle-item-container" id="vehicle-item-container">
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const vehicle = await CarDbSource.listCar();
      const vehicleItemContainer = document.getElementById('vehicle-item-container');
      if (vehicle.length === 0) {
        vehicleItemContainer.innerHTML = '<h3>No Item founded</h3>';
      }
      vehicle.forEach((vehicle) => {
        vehicleItemContainer.innerHTML += vehicleItem(vehicle);
      });
    } catch (error) {
      console.error('An error occurred:', error);
    }
  },
};

export default Sewa;
