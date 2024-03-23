import dotenv from 'dotenv';

dotenv.config();

export const DEFAULT_ADMIN = {
  email: process.env.ADMIN_PANEL_EMAIL,
  password: process.env.ADMIN_PANEL_PASSWORD,
};
