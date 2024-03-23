import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import initAdminPanel from './admin';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: ['https://localhost:3000'],
    credentials: true,
  });

  await initAdminPanel(app);

  const port = configService.get<number>('APP_PORT');
  await app.listen(port);
  console.log(`App started at port ${port}`);
}
bootstrap();
