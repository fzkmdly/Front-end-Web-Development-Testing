import CONFIG from './config';

// Disesuaikan sama API yang digunakan
const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  POST_CAR: `${CONFIG.BASE_URL}/post`, // Ubah URL sesuai dengan API yang digunakan
};

export default API_ENDPOINT;
