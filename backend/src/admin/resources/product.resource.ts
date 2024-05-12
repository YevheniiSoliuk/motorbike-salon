import Product from 'src/products/entities/product.entity';
import { productsNavigation } from '../constants';

export const ProductResource = {
  resource: Product,
  options: {
    navigation: productsNavigation,
  },
};
