import CONFIG from './config';

// Disesuaikan sama API yang digunakan
const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL_VEHICLE}/list`,
  DETAIL: (id) => `${CONFIG.BASE_URL_VEHICLE}/detail/${id}`,
  POST_CAR: `${CONFIG.BASE_URL}/post`,
  LOGIN: `${CONFIG.BASE_URL}/auth/login`,
  REGISTER: `${CONFIG.BASE_URL}/auth/register`,
};

export default API_ENDPOINT;
