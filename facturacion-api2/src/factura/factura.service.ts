import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';

@Injectable()
export class FacturaService {

  constructor(
    @InjectRepository(Factura)
    private readonly facturacionRepository : Repository<Factura>
  ){

  }

  async create(createFacturaDto: CreateFacturaDto) {
    return await this.facturacionRepository.save(createFacturaDto);
  }

  async findAll() {
    return await this.facturacionRepository.find({
      take:10,
      skip:0
    });
  }

  async findOne(id: number) {
    return this.facturacionRepository.findOne({
      where: {n_factura:id}
    });
  }

  async update(id: number, updateFacturaDto: UpdateFacturaDto) {
    const actualizar = await this.facturacionRepository.preload({
      n_factura:id,
      ...updateFacturaDto
    });

    return await this.facturacionRepository.save(actualizar);
  }

  async remove(id: number) {
    
    const borrar = await this.facturacionRepository.find({where:{n_factura:id}})

    return this.facturacionRepository.remove(borrar);
  }
}
