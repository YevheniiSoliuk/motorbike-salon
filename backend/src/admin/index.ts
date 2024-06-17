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
import { ProductGuarantyResource } from './resources/product-guaranty.resource';
import { AdditionResource } from './resources/addition.resource';
import { AdditionImageResource } from './resources/addition-image.resource';
import { GuarantyResource } from './resources/guaranty.resource';

import { dataSource } from '../database/data-source';
import { locale } from './locale';
import { authenticate } from './auth';
import { afterFileUpload } from './features/file';

import dotenv from 'dotenv';
import { ConfigurationResource } from './resources/configuration.resource';
import { ConfigurationAdditionResource } from './resources/configuration-addition.resource';
import PDFGenerator from './components/PDFGenerator';
import { LOGO_URL } from './constants';

dotenv.config();

export default async function initAdminPanel(
  app: NestExpressApplication,
): Promise<void> {
  await dataSource.initialize();

  const { AdminJS, ComponentLoader, buildFeature } = await import('adminjs');
  const AdminJSTypeorm = await import('@adminjs/typeorm');
  const uploadFeature = await import('@adminjs/upload');
  const componentLoader = new ComponentLoader();

  const Components = {
    ModelMaterialSelect: componentLoader.add(
      'ModelMaterialSelect',
      './components/ModelMaterialSelect',
    ),
    ColorPicker: componentLoader.add(
      'ColorPicker',
      './components/ColorPicker/index',
    ),
    ProductAdditionSelect: componentLoader.add(
      'ProductAdditionSelect',
      './components/ProductAdditionSelect',
    ),
    ConfigurationProductAdditionsTable: componentLoader.add(
      'ConfigurationProductAdditionsTable',
      './components/ConfigurationProductAdditionsTable',
    ),
    UserDataForm: componentLoader.add(
      'UserDataForm',
      './components/UserDataForm',
    ),
    PDFGenerator: componentLoader.add(
      'PDFGenerator',
      './components/PDFGenerator',
    ),
  };

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
      logo: LOGO_URL,
      companyName: 'MotorCycle',
      withMadeWithLove: true,
    },
    resources: [
      DiscountResource,
      CategoryResource,
      ProductResource,
      AdditionResource,
      ProductAdditionResource(
        Components.ModelMaterialSelect,
        Components.ColorPicker,
      ),
      ProductImageResource,
      ProductModelResource,
      ProductGuarantyResource,
      AdditionImageResource,
      UserResource,
      RoleResource,
      ImageResource(uploadFeature, componentLoader, uploadFileFeature),
      ModelResource(uploadFeature, componentLoader, uploadFileFeature),
      GuarantyResource,
      ConfigurationResource(
        Components.UserDataForm,
        Components.ConfigurationProductAdditionsTable,
        Components.PDFGenerator,
      ),
      ConfigurationAdditionResource(Components.ProductAdditionSelect),
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
    {
      resave: true,
      saveUninitialized: true,
      secret: 'adminjs',
    },
  );

  app.use(adminPanel.options.rootPath, adminRouter);
}
