import { dataSource } from 'src/database/data-source';
import { DEFAULT_ADMIN } from './constants';

export const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }

  const user = await getUser(email);

  if (!user) {
    return null;
  }

  if (user.role.name === 'user') {
    return null;
  }

  return user;
};

export async function getUser(email: string) {
  return await dataSource.getRepository('user').findOne({
    relations: ['role'],
    where: { email },
  });
}
