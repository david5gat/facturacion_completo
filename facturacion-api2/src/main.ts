import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors : true});
  app.getHttpServer;
  const port = process.env.PORT || 3000;
  await app.listen(port);

  app.enableCors({
    origin: '*', // Reemplaza con tu dominio permitido o utiliza '*' para permitir cualquier dominio
    methods: ['GET','POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  })

}
bootstrap();
