import { Module } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { servicios } from './entities/servicio.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ servicios ])],
  controllers: [ServiciosController],
  providers: [ServiciosService]
})
export class ServiciosModule {}
