import { api } from '.';

type Category = {
  id: number;
  name: string;
};

type Discount = {
  id: number;
  name: string;
  amount: number;
  fromDate: string;
  toDate: string;
};

type Model = {
  id: number;
  name: string;
  url: string;
};

export type Product = {
  id: number;
  uuid: string;
  name: string;
  description: string;
  price: number;
  catalogNumber: string;
  category: Category;
  discount: Discount;
  models: Model[];
};

export const fetchProducts = async () => {
  return await api.get('/products');
};

export const fetchProductById = async (productId: number) => {
  return await api.get(`/products/${productId}`);
};
