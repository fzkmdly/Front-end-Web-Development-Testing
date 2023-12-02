import CONFIG from './config';

// Disesuaikan sama API yang digunakan
const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  POST_CAR: `${CONFIG.BASE_URL}/post`,
  LOGIN: `${CONFIG.BASE_URL}/auth/login`,
  REGISTER: `${CONFIG.BASE_URL}/auth/register`,
};

export default API_ENDPOINT;
