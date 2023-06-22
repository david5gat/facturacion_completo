import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/entities/usuario.entity';
import { ServiciosModule } from './servicios/servicios.module';
import { FacturaModule } from './factura/factura.module';


@Module({
  imports: [ConfigModule.forRoot(),
            TypeOrmModule.forRoot({
              type: "mysql",
              host: "localhost",
              port: 3306,
              username: "root"@"localhost",
              password: "mysql_native_password",
              database: "facturacion",
              autoLoadEntities: true,
              synchronize: true
            })
            , UsuarioModule, ServiciosModule, FacturaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
