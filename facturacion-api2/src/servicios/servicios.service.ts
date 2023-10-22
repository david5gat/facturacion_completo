import { Injectable } from '@nestjs/common';
import { CreateServiciosDto } from './dto/create-servicio.dto';
import { UpdateServiciosDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { servicios } from './entities/servicio.entity';

@Injectable()
export class ServiciosService {


  constructor( 
    @InjectRepository(servicios)
    private readonly ServicioRepository : Repository<servicios>
  ){}


  async create(createServicioDto: CreateServiciosDto) {
    const crear = await this.ServicioRepository.create(createServicioDto) 
    return await this.ServicioRepository.save(crear);
  }



  async findAll() {
          return await this.ServicioRepository.find({
            take:10,
            skip:0
          });
  }



   async findOne(id: number) {
    return await this.ServicioRepository.findOne({where:{id_servcio : id}});
  }


  async update(id: number, updateServicioDto: UpdateServiciosDto) {
    const actualizar = await this.ServicioRepository.preload({
      id_servcio : id,
      ...updateServicioDto
    });
    return await this.ServicioRepository.save(actualizar)
  }


  async remove(id: number) {
    const borrar = await this.ServicioRepository.findOne({where: { id_servcio : id}})
    return  await this.ServicioRepository.remove(borrar);
  }
}
