/** @format */

import axios from 'axios';

const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_DOMAIN,
});


export default axiosInstance;
