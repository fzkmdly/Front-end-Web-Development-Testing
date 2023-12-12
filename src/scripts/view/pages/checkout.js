import CarDbSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import {paymentCheck} from '../template/templateCreator';

const Checkout = {
  async render() {
    return `
    <div id="paymentInfo" class="paymentInfo">

    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const paymentChecking = document.getElementById('paymentInfo');

    const sessionData = JSON.parse(sessionStorage.getItem('rentalData'));
    const vehicleDatas = await CarDbSource.detailCar(url.id);

    paymentChecking.innerHTML = paymentCheck(sessionData, vehicleDatas);
  },
};

export default Checkout;
