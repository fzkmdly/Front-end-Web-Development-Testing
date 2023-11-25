const Sewa = {
  async render() {
    return `
      <div id="sewa-page" class="sewa-page">
        <header>
          <rental-bar></rental-bar>
        </header>
        <div id="vehicle-sewa-list" class="vehicle-sewa-list">
          <h1>Pilihlah Kendaraan</h1>
        </div>
      </div>
    `;
  },

  async afterRender() {

  },
};

export default Sewa;
