import { NestExpressApplication } from '@nestjs/platform-express';

import Discount from 'src/discounts/entities/discount.entity';
import Product from 'src/products/entities/product.entity';
import Category from 'src/categories/entities/category.entity';
import Model from 'src/products/models/model.entity';
import Image from 'src/products/images/image.entity';

import { dataSource } from '../database/data-source';
import { locale } from './locale';
import { authenticate } from './auth';

import dotenv from 'dotenv';

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
    resources: [Discount, Category, Product, Image, Model],
    locale: locale,
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
