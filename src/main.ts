import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //elimina propiedades que no esten en el dto
      forbidNonWhitelisted: true,//evita que se envien propiedades que no esten en los dtos
    })
  );

  await app.listen(3000);
}
bootstrap();
