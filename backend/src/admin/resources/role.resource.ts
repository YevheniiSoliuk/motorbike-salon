import Role from 'src/roles/entities/role.entity';
import { usersNavigation } from '../constants';

export const RoleResource = {
  resource: Role,
  options: {
    navigation: usersNavigation,
    listProperties: ['name'],
    showProperties: ['name'],
    filterProperties: ['name'],
    editProperties: ['name'],
    actions: {
      list: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
      },
      show: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
      },
      new: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
      },
      edit: {
        isAccessible: isAccessibleForCurrentAdmin,
        isVisible: true,
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

function isAccessibleForCurrentAdmin(context) {
  const { currentAdmin } = context;

  return currentAdmin.role.name === 'super-admin';
}
