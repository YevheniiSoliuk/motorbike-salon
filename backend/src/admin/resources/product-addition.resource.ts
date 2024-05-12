import ProductAddition from 'src/products/product-addition/product-addition.entity';
import { productsNavigation } from '../constants';

export const ProductAdditionResource = {
  resource: ProductAddition,
  options: {
    navigation: productsNavigation,
  },
};
