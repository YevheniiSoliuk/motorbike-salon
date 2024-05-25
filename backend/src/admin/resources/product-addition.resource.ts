import ProductAddition from 'src/products/product-addition/product-addition.entity';
import { productsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';

export const ProductAdditionResource = {
  resource: ProductAddition,
  options: {
    navigation: productsNavigation,
    listProperties: ['name', 'product', 'addition'],
    showProperties: ['name', 'product', 'addition'],
    filterProperties: ['name', 'product', 'addition'],
    properties: {
      product: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      addition: {
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
  const productAddition = await getFullProductAddition(params.id);

  if (!productAddition.product) {
    params.product = 'N/A';
  } else {
    params.product = productAddition.product.name;
  }

  if (!productAddition.addition) {
    params.addition = 'N/A';
  } else {
    params.addition = productAddition.addition.name;
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
      message: 'Product ID is required',
    };
  }

  if (!payload['addition.id']) {
    errors['addition.id'] = {
      message: 'Addition ID is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullProductAddition(productAdditionId: number) {
  return await dataSource.getRepository('product_addition').findOne({
    relations: ['product', 'addition'],
    where: {
      id: productAdditionId,
    },
  });
}
