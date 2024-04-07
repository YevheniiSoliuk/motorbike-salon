import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import initAdminPanel from './admin';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /*
   * Server config
   */
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: ['https://localhost:3000'],
    credentials: true,
  });

  /*
   * Swagger API
   */
  const config = new DocumentBuilder()
    .setTitle('Motorcycle salon')
    .setDescription('The motorcycle salon API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  /*
   * Admin.js
   */
  await initAdminPanel(app);

  const port = configService.get<number>('APP_PORT');
  await app.listen(port);
  console.log(`App started at port ${port}`);
}
bootstrap();
