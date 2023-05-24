import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors : true});
  await app.listen(3000);

  app.enableCors({
    origin: '*', // Reemplaza con tu dominio permitido o utiliza '*' para permitir cualquier dominio
    methods: ['GET','POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  })

}
bootstrap();
