import CONFIG from './config';

// Disesuaikan sama API yang digunakan
const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL_VEHICLE}/list`,
  BRAND: `${CONFIG.BASE_URL_VEHICLE}/vehicle-brand`,
  DETAIL: (id) => `${CONFIG.BASE_URL_VEHICLE}/detail/${id}`,
  CREATE_CAR: `${CONFIG.BASE_URL}/partner-vehicle`,
  LOGIN: `${CONFIG.BASE_URL}/auth/login`,
  REGISTER: `${CONFIG.BASE_URL}/auth/register`,
  PROFILE: `${CONFIG.BASE_URL}/user/profile`,
  REGISTER_PARTNER: `${CONFIG.BASE_URL}/partner/create`,
  UPLOAD_PROFILE_IMAGE: `${CONFIG.BASE_URL}/user/profile/img`,
};

export default API_ENDPOINT;
