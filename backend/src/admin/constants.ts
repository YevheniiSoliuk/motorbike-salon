import dotenv from 'dotenv';

dotenv.config();

export const DEFAULT_ADMIN = {
  email: process.env.ADMIN_PANEL_EMAIL,
  password: process.env.ADMIN_PANEL_PASSWORD,
};

export const GCP_STORAGE_BUCKET = process.env.FIREBASE_APP_STORAGE_BUCKET;
export const GCP_SERVICE_ACCOUNT = process.env.GC_SERVICE_ACCOUNT;
export const MAX_MODEL_FILE_SIZE = 100 * 1024 * 1024;
