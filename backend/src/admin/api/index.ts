import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});

export const getModelById = async (modelId: number) => {
  return await API.get(`/products/model/${modelId}`);
};
