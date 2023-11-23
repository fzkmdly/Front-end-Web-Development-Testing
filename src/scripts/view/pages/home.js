const Home = {
  async render() {
    return `
                <div class="topPage">
                  <section class="leftSide">
                      <h1>Rent'O: Drive the Experience, Rent the Journey.</h1>
                      <p>Temukan beragam pilihan kendaraan berkualitas tinggi untuk kebutuhan perjalanan Anda di <b>Rent'O</b></p>
                      <div class="directLinkToSewa">
                          <a href="#/sewa">Sewa Sekarang</a>
                      </div>
                  </section>
                  <section class="rightSide">
                      <img src="./images/logo/car1.png" alt="Car Image">
                  </section>
                </div>
                <div class="mainPage">
                    <div class="vehicle-list-item" id="vehicle-list-item">
                    </div>
                </div>
            `;
  },

  async afterRender() {
    try {
      // Kode Lain
      const restaurantContainer = document.getElementById('vehicle-list-item');
      if (restaurantData.length === 0) {
        restaurantContainer.innerHTML = '<h3>No Vehicle available.</h3>';
      };
    } catch (error) {

    }
  },
};

export default Home;
