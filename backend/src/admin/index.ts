import { NestExpressApplication } from '@nestjs/platform-express';

import Discount from 'src/discounts/entities/discount.entity';
import Product from 'src/products/entities/product.entity';
import Category from 'src/categories/entities/category.entity';
import Model from 'src/models/entities/model.entity';
import Image from 'src/products/images/image.entity';

import { dataSource } from '../database/data-source';
import { locale } from './locale';
import { authenticate } from './auth';

import dotenv from 'dotenv';
import { GCP_STORAGE_BUCKET, MAX_MODEL_FILE_SIZE } from './constants';

dotenv.config();

const GCScredentials = {
  //serviceAccount: 'SERVICE_ACCOUNT',
  bucket: GCP_STORAGE_BUCKET,
  expires: 0,
};

export default async function initAdminPanel(
  app: NestExpressApplication,
): Promise<void> {
  await dataSource.initialize();

  const { AdminJS, ComponentLoader } = await import('adminjs');
  const AdminJSTypeorm = await import('@adminjs/typeorm');
  const uploadFeature = await import('@adminjs/upload');
  const componentLoader = new ComponentLoader();

  AdminJS.registerAdapter({
    Resource: AdminJSTypeorm.Resource,
    Database: AdminJSTypeorm.Database,
  });

  const AdminJSExpress = await import('@adminjs/express');
  const adminPanel = new AdminJS({
    resources: [
      Discount,
      Category,
      Product,
      Image,
      {
        resource: Model,
        features: [
          uploadFeature.default({
            componentLoader: componentLoader,
            provider: { gcp: GCScredentials },
            validation: {
              //mimeTypes: ['application/octet-stream'],
              maxSize: MAX_MODEL_FILE_SIZE,
            },
            properties: { key: 'models' },
          }),
        ],
      },
    ],
    locale: locale,
    componentLoader,
  });

  adminPanel.watch();

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
