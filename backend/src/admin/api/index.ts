import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});

export const getModelById = async (modelId: number) => {
  return await API.get(`/products/model/${modelId}`);
};

export const getProductById = async (productId: number) => {
  return await API.get(`/products/${productId}`);
};

export const getConfigurationById = async (configurationId: number) => {
  return await API.get(`/configurations/${configurationId}`);
};

export const getConfigurationAdditionsById = async (
  configurationId: number,
) => {
  return await API.get(`/configurations/${configurationId}/additions`);
};

export const getUserById = async (userId: number) => {
  return await API.get(`/users/${userId}`);
};

export const getConfigurationPDFTemplate = async (configurationId: number) => {
  return await API.get(`/pdf-templates/${configurationId}`, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
};
