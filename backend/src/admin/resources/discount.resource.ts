import Discount from 'src/discounts/entities/discount.entity';
import { format } from 'date-fns';

export const DiscountResource = {
  resource: Discount,
  options: {
    navigation: {
      icon: 'Percent',
    },
    listProperties: ['name', 'amount', 'from_date', 'to_date'],
    showProperties: ['name', 'amount', 'from_date', 'to_date'],
    filterProperties: ['fromDate', 'toDate'],
    editProperties: ['name', 'amount', 'fromDate', 'toDate'],
    properties: {
      name: {
        isRequired: true,
      },
      amount: {
        isRequired: true,
      },
      fromDate: {
        isRequired: true,
      },
      toDate: {
        isRequired: true,
      },
      from_date: {
        type: 'string',
      },
      to_date: {
        type: 'string',
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
  const fromDate = params.fromDate;
  const toDate = params.toDate;

  params.from_date = format(fromDate, 'dd/MM/yyyy');
  params.to_date = format(toDate, 'dd/MM/yyyy');
  params.amount = `${params.amount} %`;
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;

  const { name, amount, fromDate, toDate } = payload;
  const errors: any = {};

  if (!name || !name.trim().length) {
    errors.name = {
      message: 'nameRequiredError',
    };
  } else if (!new RegExp(/^[a-z ,.'-]+$/, 'gi').test(name)) {
    errors.name = {
      message: 'Name must contain latin letters',
    };
  }

  if (!amount || !amount.trim().length) {
    errors.amount = {
      message: 'Percent amount is required',
    };
  } else if (isNaN(Number(amount))) {
    errors.amount = {
      message: 'Percent amount must be a number',
    };
  } else if (amount < 1 || amount > 100) {
    errors.amount = {
      message: 'Percent amount must be in range from 1% to 100%',
    };
  }

  if (!fromDate) {
    errors.fromDate = {
      message: 'From date is required',
    };
  }

  if (!toDate) {
    errors.toDate = {
      message: 'To date is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}
