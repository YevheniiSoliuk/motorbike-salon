import ProductGuaranty from 'src/products/product-guaranty/product-guaranty.entity';
import { productsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';

export const ProductGuarantyResource = {
  resource: ProductGuaranty,
  options: {
    navigation: productsNavigation,
    listProperties: ['name', 'product', 'guaranty'],
    showProperties: ['name', 'product', 'guaranty'],
    filterProperties: ['name', 'product', 'guaranty'],
    properties: {
      product: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      guaranty: {
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
  const productGuaranty = await getFullProductGuaranty(params.id);

  if (!productGuaranty.product) {
    params.product = 'N/A';
  } else {
    params.product = productGuaranty.product.name;
  }

  if (!productGuaranty.guaranty) {
    params.guaranty = 'N/A';
  } else {
    params.guaranty = productGuaranty.guaranty.name;
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
      message:
        'Name must contain latin letters, digits, spaces, defices and underscores',
    };
  }

  if (!payload['product.id']) {
    errors['product.id'] = {
      message: 'Product ID is required',
    };
  }

  if (!payload['guaranty.id']) {
    errors['guaranty.id'] = {
      message: 'Guaranty ID is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullProductGuaranty(productGuarantyId: number) {
  return await dataSource.getRepository('product_guaranty').findOne({
    relations: ['product', 'guaranty'],
    where: {
      id: productGuarantyId,
    },
  });
}
