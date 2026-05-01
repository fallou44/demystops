import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

export async function createNestApp() {
  const app = await NestFactory.create(AppModule);
  // Global prefix is handled by mounting in server.ts
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  return app;
}
