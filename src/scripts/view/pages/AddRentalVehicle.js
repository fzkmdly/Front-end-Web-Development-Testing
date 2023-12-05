import {addRentalVehicle} from '../template/templateCreator';

const addVehicle = {
  async render() {
    return `
        <div id="addYourVehicle" class="addYourVehicle">

        </div>
        `;
  },

  async afterRender() {
    const addFormVehicleContainer = document.getElementById('addYourVehicle');
    try {
      addFormVehicleContainer.innerHTML += addRentalVehicle();
    } catch (error) {
      console.log(error);
    }
  },
};

export default addVehicle;
