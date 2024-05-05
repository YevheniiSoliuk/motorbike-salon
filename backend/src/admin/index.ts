import { NestExpressApplication } from '@nestjs/platform-express';

import Discount from 'src/discounts/entities/discount.entity';
import Product from 'src/products/entities/product.entity';
import Category from 'src/categories/entities/category.entity';
import Model from 'src/models/entities/model.entity';
import Image from 'src/images/entities/image.entity';
import AdditionImage from 'src/images/addition-image/addition-image.entity';
import ProductImage from 'src/images/product-image/product-image.entity';

import { dataSource } from '../database/data-source';
import { locale } from './locale';
import { authenticate } from './auth';

import dotenv from 'dotenv';
import {
  GCP_STORAGE_BUCKET,
  MAX_MODEL_FILE_SIZE,
  GCP_SERVICE_ACCOUNT,
  MAX_IMAGE_FILE_SIZE,
  IMAGE_FILE_MIME_TYPES,
} from './constants';
import Addition from 'src/additions/entities/addition.entity';
import { afterFileUpload } from './features/file';
import Configuration from 'src/configurations/entities/configuration.entity';
import User from 'src/users/entities/user.entity';
import Role from 'src/roles/entities/role.entity';
import ConfigurationAddition from 'src/configurations/configuration-addition/configuration-addition.entity';

dotenv.config();

const GCScredentials = {
  serviceAccount: GCP_SERVICE_ACCOUNT,
  bucket: GCP_STORAGE_BUCKET,
  expires: 0,
};

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
    resources: [
      Discount,
      Category,
      Product,
      Addition,
      ProductImage,
      AdditionImage,
      User,
      Role,
      {
        resource: Image,
        features: [
          uploadFeature.default({
            componentLoader: componentLoader,
            provider: { gcp: GCScredentials },
            validation: {
              mimeTypes: IMAGE_FILE_MIME_TYPES,
              maxSize: MAX_IMAGE_FILE_SIZE,
            },
            properties: {
              key: 'key',
              bucket: 'images',
            },
            uploadPath: (record, filename) => {
              return `images/${filename}`;
            },
          }),
          uploadFileFeature({}),
        ],
      },
      {
        resource: Model,
        features: [
          uploadFeature.default({
            componentLoader: componentLoader,
            provider: { gcp: GCScredentials },
            validation: {
              // mimeTypes: ['model/gltf-binary'],
              maxSize: MAX_MODEL_FILE_SIZE,
            },
            properties: {
              key: 'key',
              bucket: 'models',
            },
            uploadPath: (record, filename) => {
              return `models/${filename}`;
            },
          }),
          uploadFileFeature({}),
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
