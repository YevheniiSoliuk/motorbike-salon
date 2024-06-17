import { api } from '.';

export const login = async (email: string, password: string) => {
  return await api.post('/auth/login', {
    email,
    password,
  });
};
export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  return await api.post('/auth/register', {
    firstName,
    lastName,
    email,
    password,
  });
};
