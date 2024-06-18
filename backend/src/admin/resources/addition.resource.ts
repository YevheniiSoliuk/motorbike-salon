import Addition from 'src/additions/entities/addition.entity';
import { additionsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';
import { randomUUID } from 'crypto';

export const AdditionResource = {
  resource: Addition,
  options: {
    navigation: additionsNavigation,
    listProperties: ['name', 'price'],
    showProperties: ['name', 'price'],
    editProperties: ['name', 'price'],
    filterProperties: ['name', 'price'],
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
  params.price = `${params.price} PLN`;
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { name, price } = payload;
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

  if (!price || !price.trim().length) {
    errors.price = {
      message: 'Price amount is required',
    };
  } else if (isNaN(Number(price))) {
    errors.price = {
      message: 'Price amount must be a number',
    };
  } else if (price < 0) {
    errors.price = {
      message: 'Price amount must be positive',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  request.payload.uuid = randomUUID();

  return request;
}
