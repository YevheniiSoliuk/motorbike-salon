import ProductImage from 'src/images/product-image/product-image.entity';
import { productsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';

export const ProductImageResource = {
  resource: ProductImage,
  options: {
    navigation: productsNavigation,
    listProperties: ['name', 'product', 'image'],
    showProperties: ['name', 'product', 'image'],
    filterProperties: ['name', 'product', 'image'],
    properties: {
      product: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      image: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
    },
    actions: {
      list: {
        after: [afterShowList],
      },
      show: {
        after: [afterShowDetails],
      },
      new: {
        before: [validateForm],
      },
      edit: {
        before: [validateForm],
      },
    },
  },
};

async function afterShowList(res) {
  const { records } = res;

  for (const record of records) {
    const { params } = record;
    await formatRecord(params);
    record.params = params;
  }

  return res;
}

async function afterShowDetails(res) {
  const { params } = res.record;
  await formatRecord(params);
  res.record.params = params;

  return res;
}

async function formatRecord(params) {
  const productImage = await getFullProductImage(params.id);

  if (!productImage.product) {
    params.product = 'N/A';
  } else {
    params.product = productImage.product.name;
  }

  if (!productImage.image) {
    params.image = 'N/A';
  } else {
    params.image = productImage.image.name;
  }
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { name } = payload;
  const errors: any = {};

  if (!name || !name.trim().length) {
    errors.name = {
      message: 'Name is required',
    };
  } else if (!new RegExp(/^[a-zA-Z0-9 -_]+$/, 'gi').test(name)) {
    errors.name = {
      message: 'Name must contain latin letters',
    };
  }

  if (!payload['product.id']) {
    errors['product.id'] = {
      message: 'Product is required',
    };
  }

  if (!payload['image.id']) {
    errors['image.id'] = {
      message: 'Image is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullProductImage(productImageId: number) {
  return await dataSource.getRepository('product_image').findOne({
    relations: ['product', 'image'],
    where: {
      id: productImageId,
    },
  });
}
