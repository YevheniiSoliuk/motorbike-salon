import dotenv from 'dotenv';

dotenv.config();

export const DEFAULT_ADMIN = {
  email: process.env.ADMIN_PANEL_EMAIL,
  password: process.env.ADMIN_PANEL_PASSWORD,
  role: {
    name: 'super-admin',
  },
};

export const GCP_STORAGE_BUCKET = process.env.FIREBASE_APP_STORAGE_BUCKET;
export const GCP_SERVICE_ACCOUNT = process.env.GC_SERVICE_ACCOUNT;
export const MAX_MODEL_FILE_SIZE = 100 * 1024 * 1024;
export const MAX_IMAGE_FILE_SIZE = 10 * 1024 * 1024;
export const IMAGE_FILE_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/jfif',
];

export const GCS_CREDENTIALS = {
  serviceAccount: GCP_SERVICE_ACCOUNT,
  bucket: GCP_STORAGE_BUCKET,
  expires: 0,
};

export const BASE_CLIENT_URL = 'http://localhost:3000/';
export const LOGO_URL =
  'https://firebasestorage.googleapis.com/v0/b/motorcycle-salon.appspot.com/o/motorbike.png?alt=media&token=2676a6f2-18a1-45ab-925c-63651df6c35f';

export const usersNavigation = {
  name: 'Users',
  icon: 'User',
};

export const productsNavigation = {
  name: 'Products',
  icon: 'Package',
};

export const additionsNavigation = {
  name: 'Additions',
  icon: 'Paperclip',
};

export const configurationsNavigation = {
  name: 'Configurations',
  icon: 'FileText',
};
