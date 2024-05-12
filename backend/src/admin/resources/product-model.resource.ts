import ProductModel from 'src/products/product-model/product-model.entity';
import { productsNavigation } from '../constants';

export const ProductModelResource = {
  resource: ProductModel,
  options: {
    navigation: productsNavigation,
  },
};
