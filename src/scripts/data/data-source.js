import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class CarDbSource {
  static async fetchData(url, options = {}) {
    try {
      const response = await axios(url, options);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async listCar() {
    const url = API_ENDPOINT.LIST;
    return this.fetchData(url).then((responseJson) => responseJson.data.vehicles);
  }

  static async detailCar(id) {
    const url = API_ENDPOINT.DETAIL(id);
    return this.fetchData(url).then((responseJson) => responseJson.data.vehicle);
  }

  static async postCar(data) {
    const url = API_ENDPOINT.POST_CAR;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    };

    return this.fetchData(url, options);
  }
}

export default CarDbSource;
