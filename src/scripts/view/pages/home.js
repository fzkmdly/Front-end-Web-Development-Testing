import {createCarCollection} from '../template/templateCreator';
import CarDbSource from '../../data/data-source';

const Home = {
  async render() {
    return `
                <div class="topPage">
                  <section class="leftSide">
                      <h1>Drive Your Dreams with Rent'O: Your Journey, Your Car, Your Way!</h1>
                      <p>Temukan beragam pilihan kendaraan berkualitas tinggi untuk kebutuhan perjalanan Anda di <b>Rent'O</b></p>
                      <div class="directLinkToSewa">
                          <a href="#/sewa">Sewa Sekarang</a>
                      </div>
                  </section>
                  <section class="rightSide">
                      <picture>
                        <source type="image/webp" srcset="./images/logo/car.webp">
                        <source type="image/jpeg" srcset="./images/logo/car.png">
                        <img src="./images/logo/car.png" alt="Quality Check">
                      </picture>
                  </section>
                </div>
                <div class="banner">
                    <h2>A Better Way to Find Your Perfect Car</h2>
                    <p class="second-tagline">Simplicity in Every Mile: Rent'O, Where Car Rental Meets Effortless Ease.</p>
                    <div class="cards-container">
                        <div class="card-1">
                          <div class="card-image">
                            <picture>
                              <source type="image/webp" srcset="./images/logo/cards-container/high-quality.webp">
                              <source type="image/jpeg" srcset="./images/logo/cards-container/high-quality.png">
                              <img src="./images/logo/cards-container/high-quality.png" alt="Quality Check">
                            </picture>
                          </div>
                          <div class="text-container">
                            <h4><b>Kualitas Terbaik</b></h4> 
                            <p>Setiap partner kami wajib untuk mengirim hasil cek kendaraan setiap 6 bulan</p> 
                          </div>
                        </div>
                        <div class="card-2">
                          <div class="card-image">
                            <picture>
                              <source type="image/webp" srcset="./images/logo/cards-container/price.webp">
                              <source type="image/jpeg" srcset="./images/logo/cards-container/price.png">
                              <img src="./images/logo/cards-container/price.png" alt="Price Check">
                            </picture>
                          </div>
                          <div class="text-container">
                            <h4><b>Harga terjangkau</b></h4> 
                            <p>Kami menjamin harga sewa termurah untuk setiap tipe mobil</p> 
                          </div>
                        </div>
                        <div class="card-3">
                          <div class="card-image">
                            <picture>
                              <source type="image/webp" srcset="./images/logo/cards-container/shield.webp">
                              <source type="image/jpeg" srcset="./images/logo/cards-container/shield.png">
                              <img src="./images/logo/cards-container/shield.png" alt="Shield">
                            </picture>
                          </div>
                          <div class="text-container">
                            <h4><b>Aman dan Cepat</b></h4> 
                            <p>Setiap partner telah kami verifikasi dan setiap transaksi akan langsung kami proses</p> 
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="vehicle-collection">
                   <h2>Koleksi Partner Kami</h2>
                    <div class="car-collection-container" id="car-collection-container">
                    </div>
                </div>
            `;
  },

  async afterRender() {
    try {
      const vehicles = await CarDbSource.listCar();
      const carCollectionContainer = document.getElementById('car-collection-container');

      if (vehicles.length === 0) {
        carCollectionContainer.innerHTML = '<h3>No items found</h3>';
      } else {
        const limitedVehicles = vehicles.slice(0, 6);

        limitedVehicles.forEach((vehicle) => {
          carCollectionContainer.innerHTML += createCarCollection(vehicle);
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Home;
