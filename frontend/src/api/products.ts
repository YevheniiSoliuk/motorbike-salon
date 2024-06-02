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
  model: {
    id: number;
    name: string;
    url: string;
  };
};

type Image = {
  id: number;
  name: string;
  url: string;
};

type ItemImage = {
  id: number;
  name: string;
  image: Image;
};

type Addition = {
  id: number;
  uuid: string;
  name: string;
  price: number;
  images: ItemImage[];
};

type ModelPartType = 'material' | 'color';
type ModelTextureType =
  | 'normalTexture'
  | 'occlusionTexture'
  | 'emissiveTexture'
  | 'baseColorTexture'
  | 'metallicRoughnessTexture';

export type ProductAddition = {
  id: number;
  modelMaterialIndex: number;
  modelPartType: ModelPartType;
  modelTextureType: ModelTextureType;
  rgba: [number, number, number, number];
  isDefault: boolean;
  addition: Addition;
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
  additions: ProductAddition[];
  guaranties: any;
  images: ItemImage[];
};

export const fetchProducts = async () => {
  return await api.get('/products');
};

export const fetchProductById = async (productId: number) => {
  return await api.get(`/products/${productId}`);
};
