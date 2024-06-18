import { api } from '.';
import { Product } from './products';

export type User = {
  id: number;
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  oneTimePassword: string | null;
};

export type Configuration = {
  id: number;
  uuid: string;
  name: string;
  fileUrl: string | null;
  clientFirstName: string | null;
  clientLastName: string | null;
  clientEmail: string | null;
  clientPhone: string | null;
  clientIPAddress: string | null;
  user: User;
  product: Product;
  createdAt: string;
  updatedAt: string;
};

export const getUserConfigurations = async (userUuid: string) => {
  return await api.get(`/configurations/user/${userUuid}`);
};

export const createConfiguration = async ({
  productUuid,
  userUuid,
  productAdditionsUUIDs,
}: {
  productUuid: string;
  userUuid: string;
  productAdditionsUUIDs: string[];
}) => {
  return await api.post('/configurations', {
    userUuid,
    productUuid,
    productAdditionsUUIDs,
  });
};
