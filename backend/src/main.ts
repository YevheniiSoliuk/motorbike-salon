import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import initAdminPanel from './admin';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { dirname, join } from 'path';
import { lstatSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import i18nextMiddleware from 'i18next-http-middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /*
   * Server config
   */
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  /*
   * Swagger API
   */
  const config = new DocumentBuilder()
    .setTitle('Motorcycle salon')
    .setDescription('The motorcycle salon API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  /**
   * AdminJS
   */
  await initAdminPanel(app);

  /**
   * View Engine
   */
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(
    join(__dirname, '..', 'src', 'pdf-templates', 'templates'),
  );
  app.setViewEngine('hbs');
  /**
   * i18next
   */
  // const __dirname = dirname(
  //   fileURLToPath(
  //     'file:///Users/yevheniisoliuk/Desktop/KUL/Semestr2/LS/motorcycle-salon/backend/src/locales/',
  //   ),
  // );
  // const localesFolder = join(__dirname, './locales');
  // i18next
  //   .use(i18nextMiddleware.LanguageDetector)
  //   .use(Backend)
  //   .init({
  //     initImmediate: false,
  //     fallbackLng: 'en',
  //     supportedLngs: ['en', 'pl'],
  //     preload: readdirSync(localesFolder).filter((fileName) => {
  //       const joinedPath = join(localesFolder, fileName);
  //       return lstatSync(joinedPath).isDirectory();
  //     }),
  //     backend: {
  //       loadPath: join(localesFolder, '{{lng}}/{{ns}}.json'),
  //     },
  //     detection: {
  //       order: ['querystring', 'cookie', 'header'],
  //       lookupQuerystring: 'lng',
  //       lookupCookie: 'i18next',
  //       lookupHeader: 'accept-language',
  //       lookupHeaderRegex: /(([a-z]{2})-?([A-Z]{2})?)\s*;?\s*(q=([0-9.]+))?/gi,
  //       lookupSession: 'lng',
  //       caches: false,
  //       ignoreCase: true,
  //     },
  //   });
  // app.use(i18nextMiddleware.handle(i18next));
  // console.log(i18next.language);

  const port = configService.get<number>('APP_PORT');
  await app.listen(port);
  console.log(`App started at port ${port}`);
}
bootstrap();
