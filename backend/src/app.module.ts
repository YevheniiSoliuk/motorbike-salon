import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirebaseModule } from './firebase/firebase.module';
import { DiscountsModule } from './discounts/discounts.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { ModelsModule } from './models/models.module';
import { AdditionsModule } from './additions/additions.module';
import { ImagesModule } from './images/images.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().port().default(3000),

        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),

        FIREBASE_APP_API_KEY: Joi.string().required(),
        FIREBASE_APP_AUTH_DOMAIN: Joi.string().required(),
        FIREBASE_APP_PROJECT_ID: Joi.string().required(),
        FIREBASE_APP_STORAGE_BUCKET: Joi.string().required(),
        FIREBASE_APP_MESSAGING_SENDER_ID: Joi.string().required(),
        FIREBASE_APP_ID: Joi.string().required(),

        GC_SERVICE_ACCOUNT: Joi.string().required(),

        ADMIN_PANEL_EMAIL: Joi.string().required(),
        ADMIN_PANEL_PASSWORD: Joi.string().required(),
        ADMIN_PANEL_COOKIE_SECRET: Joi.string().required(),

        ACCESS_TOKEN_EXPIRES_IN_SECONDS: Joi.string().required(),
        REFRESH_TOKEN_EXPIRES_IN_SECONDS: Joi.string().required(),
        ACCESS_TOKEN_SECRET: Joi.string().required(),
        REFRESH_TOKEN_SECRET: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        username: configService.get<string>('POSTGRES_USER'),
        database: configService.get<string>('POSTGRES_DB'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    FirebaseModule,
    DiscountsModule,
    CategoriesModule,
    ProductsModule,
    ModelsModule,
    AdditionsModule,
    ImagesModule,
    AuthModule,
    UsersModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
