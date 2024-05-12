import ProductImage from 'src/images/product-image/product-image.entity';
import { productsNavigation } from '../constants';

export const ProductImageResource = {
  resource: ProductImage,
  options: {
    navigation: productsNavigation,
  },
};
