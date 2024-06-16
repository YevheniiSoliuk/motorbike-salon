import Product from 'src/products/entities/product.entity';
import { productsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';
import { randomUUID } from 'crypto';

/**
 * In characters
 */
const MAX_DESCRIPTION_LENGTH = 1000;

export const ProductResource = {
  resource: Product,
  options: {
    navigation: productsNavigation,
    listProperties: ['name', 'price', 'catalogNumber', 'category', 'discount'],
    showProperties: [
      'name',
      'description',
      'price',
      'catalogNumber',
      'category',
      'discount',
    ],
    filterProperties: ['name', 'category', 'discount'],
    properties: {
      category: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      discount: {
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
  const product = await getFullProduct(params.id);

  params.price = `${params.price} PLN`;

  if (!product.category) {
    params.category = 'N/A';
  } else {
    params.category = product.category.name;
  }

  if (!product.discount) {
    params.discount = 'N/A';
  } else {
    params.discount = product.discount.name;
  }
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { name, description, price, catalogNumber } = payload;
  const errors: any = {};

  if (!name || !name.trim().length) {
    errors.name = {
      message: 'Name is required',
    };
  } else if (!new RegExp(/^[a-z0-9 ,.'-]+$/, 'gi').test(name)) {
    errors.name = {
      message: 'Name must contain latin letters',
    };
  }

  if (!description || !description.trim().length) {
    errors.description = {
      message: 'Description is required',
    };
  } else if (description.length > MAX_DESCRIPTION_LENGTH) {
    errors.description = {
      message: 'Description must contain less than 1000 characters',
    };
  }

  if (!price || !price.trim().length) {
    errors.price = {
      message: 'Price amount is required',
    };
  } else if (isNaN(Number(price))) {
    errors.price = {
      message: 'Price amount must be a number',
    };
  } else if (price < 1) {
    errors.price = {
      message: 'Price amount must be positive',
    };
  }

  if (!catalogNumber || !catalogNumber.trim().length) {
    errors.catalogNumber = {
      message: 'Catalog number is required',
    };
  } else if (!new RegExp(/^[A-Z0-9_]+$/, 'gi').test(catalogNumber)) {
    errors.catalogNumber = {
      message:
        'Catalog number could contain capital latin letters, numbers and underscrore',
    };
  }

  if (!payload['category.id']) {
    errors['category.id'] = {
      message: 'Category is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  request.payload.uuid = randomUUID();

  return request;
}

async function getFullProduct(productId: number) {
  return await dataSource.getRepository('product').findOne({
    relations: ['category', 'discount'],
    where: {
      id: productId,
    },
  });
}
