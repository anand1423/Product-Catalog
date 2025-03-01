import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Validation globally
  app.useGlobalPipes(new ValidationPipe());

  // Enable CORS
  app.enableCors();

  // Get port from environment variables
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 8000);

  await app.listen(port);
}
bootstrap();
