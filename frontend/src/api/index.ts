import axios from 'axios';
import { BASE_URL } from './constants';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  try {
    const accessToken = localStorage.getItem('access-token');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
});
