import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const expressApp = express();
  expressApp.use(express.static(path.join(__dirname, '..', 'static')));
  expressApp.set('views', path.join(__dirname, '..', 'views'));
  expressApp.set('view engine', 'ejs');
  app.use(expressApp);
  await app.listen(3000);
  app.enableCors();
}
bootstrap();
