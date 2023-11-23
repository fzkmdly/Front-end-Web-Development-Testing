const Home = {
  async render() {
    return `
                <div class="topPage">
                  <section class="leftSide">
                      <h1>Discover the world on wheels with our car rental service</h1>
                      <p>Temukan beragam pilihan kendaraan berkualitas tinggi untuk kebutuhan perjalanan Anda di <b>Rent'O</b></p>
                      <div class="directLinkToSewa">
                          <a href="#/sewa">Sewa Sekarang</a>
                      </div>
                  </section>
                  <section class="rightSide">
                      <img src="https://i.pinimg.com/564x/3d/31/27/3d3127b435cec4189d747830a84b6868.jpg" alt="CarImage">
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
