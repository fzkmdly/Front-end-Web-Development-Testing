import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';
import Cookies from 'js-cookie';

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

  static async filterCar() {
    const url = API_ENDPOINT.LIST;
    return this.fetchData(url).then((responseJson) => responseJson.data.vehicles);
  }

  static async getUserProfile() {
    const url = API_ENDPOINT.PROFILE;
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getAccessToken()}`,
      },
    };

    const response = await this.fetchData(url, options);
    return response.data.user;
  }

  static getAccessToken() {
    return Cookies.get('uid') || '';
  }
}

export default CarDbSource;
