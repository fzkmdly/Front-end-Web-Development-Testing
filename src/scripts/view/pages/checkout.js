import CarDbSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import {paymentCheck} from '../template/templateCreator';
import API_ENDPOINT from '../../globals/api-endpoint';

const Checkout = {
  async render() {
    return `
    <div id="paymentInfo" class="paymentInfo">

    </div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const paymentChecking = document.getElementById('paymentInfo');

      const sessionData = JSON.parse(sessionStorage.getItem('rentalData'));
      const vehicleDatas = await CarDbSource.detailCar(url.id);

      paymentChecking.innerHTML = paymentCheck(sessionData, vehicleDatas);

      const checkOutButton = document.getElementById('paymentConfirm');
      paymentChecking.addEventListener('submit', this.updateTotalPaymentHandler);
      checkOutButton.addEventListener('click', this.updateTotalPaymentHandler);
    } catch (error) {
      console.log(error);
    }
  },

  async updateTotalPaymentHandler(event) {
    event.preventDefault();
    try {
      const rentID = JSON.parse(sessionStorage.getItem('rentID'));
      const rentId = rentID.rentId;

      // Get totalPayment from paymentCheck function and format it as needed
      const totalPayment = document.getElementById('paymentCheck').value.replace(/[,.]|Rp/g, '');

      // Make PUT request
      const putUrl = `${API_ENDPOINT.UPDATE_PAYMENT}/${rentId}`;
      const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || {};
      const accessToken = loginInfo.uid || '';

      const response = await fetch(putUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json', // Add this line to set Content-Type
        },
        body: JSON.stringify({
          totalPayment: totalPayment.toString(), // Convert to string if it's a string-based API
        }),
      });

      if (response.ok) {
        alert('Payment confirmed successfully!');
      } else {
        alert('Failed to confirm payment:', response.statusText);
      }
    } catch (error) {
      alert('Error during payment confirmation:', error.message);
    }
  }
  ,
};

export default Checkout;
