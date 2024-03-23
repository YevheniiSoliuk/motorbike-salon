import { NestExpressApplication } from '@nestjs/platform-express';
import { authenticate } from './auth';
import dotenv from 'dotenv';
import { dataSource } from '../database/data-source';

dotenv.config();

export default async function initAdminPanel(
  app: NestExpressApplication,
): Promise<void> {
  await dataSource.initialize();

  const { AdminJS } = await import('adminjs');
  const AdminJSTypeorm = await import('@adminjs/typeorm');

  AdminJS.registerAdapter({
    Resource: AdminJSTypeorm.Resource,
    Database: AdminJSTypeorm.Database,
  });

  const AdminJSExpress = await import('@adminjs/express');
  const adminPanel = new AdminJS({
    resources: [],
  });
  const authOptions = {
    authenticate,
    cookieName: 'adminjs',
    cookiePassword: process.env.ADMIN_PANEL_COOKIE_SECRET,
  };
  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminPanel,
    authOptions,
    null,
  );
  app.use(adminPanel.options.rootPath, adminRouter);
}
