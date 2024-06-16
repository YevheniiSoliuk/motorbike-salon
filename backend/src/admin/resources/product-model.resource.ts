import ProductModel from 'src/products/product-model/product-model.entity';
import { productsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';

export const ProductModelResource = {
  resource: ProductModel,
  options: {
    navigation: productsNavigation,
    listProperties: ['name', 'product', 'model'],
    showProperties: ['name', 'product', 'model'],
    filterProperties: ['name', 'product', 'model'],
    properties: {
      product: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      model: {
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
  const productModel = await getFullProductModel(params.id);

  if (!productModel.product) {
    params.product = 'N/A';
  } else {
    params.product = productModel.product.name;
  }

  if (!productModel.model) {
    params.model = 'N/A';
  } else {
    params.model = productModel.model.name;
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
      message: 'Product is required',
    };
  }

  if (!payload['model.id']) {
    errors['model.id'] = {
      message: 'Model is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullProductModel(productModelId: number) {
  return await dataSource.getRepository('product_model').findOne({
    relations: ['product', 'model'],
    where: {
      id: productModelId,
    },
  });
}
