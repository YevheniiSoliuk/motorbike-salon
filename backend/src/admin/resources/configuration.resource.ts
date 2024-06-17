import { configurationsNavigation } from '../constants';
import Configuration from 'src/configurations/entities/configuration.entity';
import { dataSource } from 'src/database/data-source';
import { RoleType } from 'src/roles/types/roles';
import argon2 from 'argon2';
import { randomUUID } from 'crypto';

export const ConfigurationResource = (
  userDataForm: string,
  table: string,
  pdfGenerator: string,
) => ({
  resource: Configuration,
  options: {
    navigation: configurationsNavigation,
    listProperties: ['name', 'product', 'user', 'createdAt', 'updatedAt'],
    showProperties: [
      'name',
      'uuid',
      'fileUrl',
      'product',
      'user',
      'userIPAddress',
      'createdAt',
      'updatedAt',
      'createdBy',
      'productAdditionsTable',
    ],
    editProperties: ['name', 'product.id', 'user.id', 'userDataForm'],
    filterProperties: [
      'name',
      'product',
      'user',
      'createdAt',
      'updatedAt',
      'createdBy',
    ],
    properties: {
      product: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      user: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      createdBy: {
        type: 'string',
        isVisible: {
          edit: false,
        },
      },
      userDataForm: {
        components: {
          edit: userDataForm,
        },
      },
      productAdditionsTable: {
        components: {
          show: table,
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
      generatePDF: {
        actionType: 'record',
        icon: 'FileText',
        component: pdfGenerator,
        handler: (request, response, context) => {
          const { record, currentAdmin } = context;

          return {
            record: record.toJSON(currentAdmin),
            //url: pdfGenerator(record.toJSON(currentAdmin)),
          };
        },
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
  const configuration = await getFullConfiguration(params.id);

  if (!params.fileUrl) {
    params.fileUrl = 'N/A';
  }

  if (!params.userIPAddress) {
    params.userIPAddress = 'N/A';
  }

  if (!configuration.user) {
    params.user = 'N/A';
  } else {
    params.user = `${configuration.user.firstName} ${configuration.user.lastName}`;
  }

  if (!configuration.createdBy) {
    params.createdBy = 'N/A';
  } else {
    params.createdBy = `${configuration.createdBy.firstName} ${configuration.createdBy.lastName}`;
  }

  if (!configuration.product) {
    params.product = 'N/A';
  } else {
    params.product = configuration.product.name;
  }
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { name, firstName, lastName, email } = payload;
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

  if (firstName && !new RegExp(/^[a-zA-Z0-9 ]+$/, 'gi').test(firstName)) {
    errors.firstName = {
      message: 'First name must contain latin letters, digits, and spaces',
    };
  }

  if (lastName && !new RegExp(/^[a-zA-Z0-9 ]+$/, 'gi').test(lastName)) {
    errors.lastName = {
      message: 'Last name must contain latin letters, digits, and spaces',
    };
  }

  if (
    email &&
    !new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      'gi',
    ).test(email)
  ) {
    errors.email = {
      message: 'Incorrect email',
    };
  }

  if (!payload['user.id']) {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    payload.clientIPAddress = data.ip;
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  if (
    firstName &&
    lastName &&
    email &&
    context.currentAdmin.role.name !== 'user'
  ) {
    const user = await createUser({ firstName, lastName, email });
    payload['user.id'] = user.id;
  }

  if (!payload['createdBy.id']) {
    const user = await getUserByEmail(context.currentAdmin.email);
    payload['createdBy.id'] = user.id;
  }

  return request;
}

async function getFullConfiguration(configurationId: number) {
  return await dataSource.getRepository('configuration').findOne({
    relations: ['user', 'product'],
    where: { id: configurationId },
  });
}

async function createUser({
  firstName,
  lastName,
  email,
}: {
  firstName: string;
  lastName: string;
  email: string;
}) {
  const userRole = await getRoleByName('user');
  const password = randomUUID();
  const passwordHash = await hash(password);
  const newUser = dataSource.getRepository('user').create({
    firstName,
    lastName,
    email,
    oneTimePassword: password,
    passwordHash,
    role: userRole,
  });

  await newUser.save();

  const user = await getUserByEmail(email);

  return user;
}

async function getUserByEmail(email: string) {
  return dataSource.getRepository('user').findOneBy({ email });
}

async function getRoleByName(name: RoleType) {
  return await dataSource.getRepository('role').findOneBy({ name });
}

async function hash(value: string): Promise<string> {
  try {
    return await argon2.hash(value);
  } catch (error) {
    console.log(error);
  }
}
