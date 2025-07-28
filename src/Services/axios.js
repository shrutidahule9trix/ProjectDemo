/** @format */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rwa1.navaantrix.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
