import { ConsoleLogger } from '@nestjs/common';
import { dataSource } from 'src/database/data-source';
import Guaranty from 'src/guaranty/entities/guaranty.entity';

const MIN_GUARANTY_DURATION = 1;
const MAX_GUARANTY_DURATION = 366;

export const GuarantyResource = {
  resource: Guaranty,
  options: {
    navigation: {
      icon: 'Shield',
    },
    listProperties: ['name', 'price', 'period', 'image'],
    showProperties: ['name', 'description', 'price', 'period', 'image'],
    filterProperties: ['name', 'period', 'duration'],
    properties: {
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
  const guaranty = await getFullGuaranty(params.id);

  if (!guaranty.image) {
    params.image = 'N/A';
  } else {
    params.image = guaranty.image.name;
  }

  params.period = `${params.duration} ${params.period}`;
  params.price = `${params.price} PLN`;
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { name, price, period, duration } = payload;
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
  } else if (price < 1) {
    errors.price = {
      message: 'Price amount must be positive',
    };
  }

  if (!period || !period.trim().length) {
    errors.period = {
      message: 'Period is required',
    };
  } else if (!new RegExp(/^[a-zA-Z]+$/, 'gi').test(period)) {
    errors.period = {
      message: 'Period must contain latin letters',
    };
  }

  if (!duration || !duration.trim().length) {
    errors.duration = {
      message: 'Duration is required',
    };
  } else if (isNaN(Number(duration))) {
    errors.duration = {
      message: 'Duration must be a number',
    };
  } else if (
    duration < MIN_GUARANTY_DURATION ||
    duration > MAX_GUARANTY_DURATION
  ) {
    errors.duration = {
      message: `Duration must be in range from ${MIN_GUARANTY_DURATION} to ${MAX_GUARANTY_DURATION}`,
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullGuaranty(guarantyId: number) {
  return await dataSource.getRepository('guaranty').findOne({
    relations: ['image'],
    where: { id: guarantyId },
  });
}
