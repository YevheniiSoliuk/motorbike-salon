import User from 'src/users/entities/user.entity';
import { usersNavigation } from '../constants';
import { getUser } from '../auth';

export const UserResource = {
  resource: User,
  options: {
    navigation: usersNavigation,
    listProperties: ['uuid', 'email', 'firstName', 'lastName', 'role'],
    showProperties: ['uuid', 'email', 'firstName', 'lastName', 'role'],
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
      },
      show: {
        after: [afterShowRecord],
      },
      edit: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
      },
      list: {
        after: [afterDisplayList],
      },
      delete: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
      },
      bulkDelete: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
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

function isAccessibleForCurrentAdmin(context) {
  const { currentAdmin } = context;

  return currentAdmin.role.name === 'super-admin';
}
