import User from 'src/users/entities/user.entity';
import { usersNavigation } from '../constants';
import { getUser } from '../auth';
import { randomUUID } from 'crypto';
import { dataSource } from 'src/database/data-source';

export const UserResource = {
  resource: User,
  options: {
    navigation: usersNavigation,
    listProperties: ['email', 'firstName', 'lastName', 'role'],
    showProperties: ['email', 'firstName', 'lastName', 'role'],
    filterProperties: ['email', 'firstName', 'lastName'],
    editProperties: ['email', 'firstName', 'lastName'],
    properties: {
      role: {
        type: 'string',
      },
    },
    actions: {
      new: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
        before: [validateForm],
      },
      show: {
        after: [afterShowRecord],
      },
      edit: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
        before: [validateForm],
      },
      list: {
        after: [afterDisplayList],
      },
      delete: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
      },
      bulkDelete: {
        isVisible: false,
        isAccessable: false,
      },
    },
  },
};

async function afterDisplayList(response, request, context) {
  const { currentAdmin } = context;

  if (currentAdmin.role.name !== 'super-admin') {
    const currentAdminRecord = response.records.find(
      (record) => record.params.uuid === currentAdmin.uuid,
    );

    currentAdminRecord.params.role = currentAdmin.role.name;
    response.records = [currentAdminRecord];
  } else {
    for (const record of response.records) {
      const user = await getUser(record.params.email);
      record.params.role = user.role.name;
    }
  }

  return response;
}

async function afterShowRecord(response, request, context) {
  const { currentAdmin } = context;

  if (currentAdmin.role.name !== 'super-admin') {
    response.record.params.role = currentAdmin.role.name;
  } else {
    const user = await getUser(response.record.params.email);
    response.record.params.role = user.role.name;
  }

  return response;
}

async function isAccessibleForCurrentAdmin(context) {
  const { record, currentAdmin } = context;
  const user = await getFullUser(record?.params?.id);

  return (
    currentAdmin.role.name === 'super-admin' &&
    user &&
    user.role.name !== 'user'
  );
}

async function validateForm(request, context) {
  const { ValidationError } = await import('adminjs');
  const { payload, method } = request;

  if (method !== 'post') return request;
  const { email, firstName, lastName } = payload;
  const errors: any = {};

  if (!email || !email.trim().length) {
    errors.email = {
      message: 'Email is required',
    };
  } else if (
    !new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      'gi',
    ).test(email)
  ) {
    errors.email = {
      message: 'Incorrect email',
    };
  }

  if (!firstName || !firstName.trim().length) {
    errors.firstName = {
      message: 'First name is required',
    };
  }

  if (!lastName || !lastName.trim().length) {
    errors.lastName = {
      message: 'Last name is required',
    };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  request.payload.uuid = randomUUID();

  return request;
}

async function getFullUser(userId: number) {
  return await dataSource.getRepository('user').findOne({
    relations: ['role'],
    where: { id: userId },
  });
}
