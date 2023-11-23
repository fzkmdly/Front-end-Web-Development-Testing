const homePage = {
  async render() {
    return `
                <div class="topPage">
                    <h1>Welcome to <span>AkaRestourant</span></h1>
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

export default homePage;
