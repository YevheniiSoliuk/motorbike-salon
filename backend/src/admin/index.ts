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
import {
  GCP_STORAGE_BUCKET,
  MAX_MODEL_FILE_SIZE,
  GCP_SERVICE_ACCOUNT,
} from './constants';
import { generateModelFileName, getFileExtension } from 'src/models/utils';
import { FirebaseService } from 'src/firebase/firebase.service';
import { ConfigService } from '@nestjs/config';

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

  const someAfterHook = async (res, req, context) => {
    const { id } = context.record.params;
    const filename = req.files['file.0'].name;
    const config = new ConfigService();
    const firebase = new FirebaseService(config);
    const link = await firebase.getFileLink(filename);

    await dataSource.getRepository('model').update(
      {
        id,
      },
      {
        url: link,
      },
    );

    return res;
  };

  const uploadFileFeature = (config = {}) => {
    return buildFeature({
      actions: {
        new: {
          after: [someAfterHook],
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
      Image,
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
