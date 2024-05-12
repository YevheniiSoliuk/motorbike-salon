import { NestExpressApplication } from '@nestjs/platform-express';

import { ImageResource } from './resources/image.resource';
import { ModelResource } from './resources/model.resource';
import { DiscountResource } from './resources/discount.resource';
import { CategoryResource } from './resources/category.resource';
import { UserResource } from './resources/user.resource';
import { RoleResource } from './resources/role.resource';
import { ProductResource } from './resources/product.resource';
import { ProductAdditionResource } from './resources/product-addition.resource';
import { ProductImageResource } from './resources/product-image.resource';
import { ProductModelResource } from './resources/product-model.resource';
import { AdditionResource } from './resources/addition.resource';
import { AdditionImageResource } from './resources/addition-image.resource';

import { dataSource } from '../database/data-source';
import { locale } from './locale';
import { authenticate } from './auth';
import { afterFileUpload } from './features/file';

import dotenv from 'dotenv';

dotenv.config();

export default async function initAdminPanel(
  app: NestExpressApplication,
): Promise<void> {
  await dataSource.initialize();

  const { AdminJS, ComponentLoader, buildFeature } = await import('adminjs');
  const AdminJSTypeorm = await import('@adminjs/typeorm');
  const uploadFeature = await import('@adminjs/upload');
  const componentLoader = new ComponentLoader();

  AdminJS.registerAdapter({
    Resource: AdminJSTypeorm.Resource,
    Database: AdminJSTypeorm.Database,
  });

  const uploadFileFeature = (config = {}) => {
    return buildFeature({
      actions: {
        new: {
          after: [afterFileUpload],
        },
      },
    });
  };

  const AdminJSExpress = await import('@adminjs/express');
  const adminPanel = new AdminJS({
    branding: {
      logo: 'https://firebasestorage.googleapis.com/v0/b/motorcycle-salon.appspot.com/o/motorbike.png?alt=media&token=2676a6f2-18a1-45ab-925c-63651df6c35f',
      companyName: 'MotorCycle',
      withMadeWithLove: true,
    },
    resources: [
      DiscountResource,
      CategoryResource,
      ProductResource,
      AdditionResource,
      ProductAdditionResource,
      ProductImageResource,
      ProductModelResource,
      AdditionImageResource,
      UserResource,
      RoleResource,
      ImageResource(uploadFeature, componentLoader, uploadFileFeature),
      ModelResource(uploadFeature, componentLoader, uploadFileFeature),
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
