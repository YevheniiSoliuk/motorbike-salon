import { configurationsNavigation } from '../constants';
import { dataSource } from 'src/database/data-source';
import ConfigurationAddition from 'src/configurations/configuration-addition/configuration-addition.entity';

export const ConfigurationAdditionResource = (select: string) => ({
  resource: ConfigurationAddition,
  options: {
    navigation: configurationsNavigation,
    listProperties: ['name', 'configuration', 'productAddition'],
    showProperties: ['name', 'configuration', 'productAddition'],
    editProperties: ['name', 'configuration.id', 'productAddition'],
    filterProperties: ['name', 'configuration', 'productAddition'],
    properties: {
      productAddition: {
        type: 'string',
        components: {
          edit: select,
          new: select,
        },
      },
      configuration: {
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
        after: [afterFormShowing],
      },
    },
  },
});

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
  const configurationAddition = await getFullConfigurationAddition(params.id);

  if (!configurationAddition.productAddition) {
    params.productAddition = 'N/A';
  } else {
    params.productAddition = configurationAddition.productAddition.name;
  }

  if (!configurationAddition.configuration) {
    params.configuration = 'N/A';
  } else {
    params.configuration = configurationAddition.configuration.name;
  }
}

async function afterFormShowing(res) {
  const params = res.record.params;
  const configurationAddition = await getFullConfigurationAddition(params.id);

  params['productAddition.id'] = configurationAddition.productAddition.id;
  params['configuration.id'] = configurationAddition.configuration.id;

  return res;
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

  if (!payload['productAddition.id']) {
    errors['productAddition.id'] = {
      message: 'Product addition is required',
    };
  }

  if (!payload['configuration.id']) {
    errors['configuration.id'] = {
      message: 'Configuration is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
}

async function getFullConfigurationAddition(configurationAdditionId: number) {
  return await dataSource.getRepository('configuration_addition').findOne({
    relations: ['productAddition', 'configuration'],
    where: {
      id: configurationAdditionId,
    },
  });
}
