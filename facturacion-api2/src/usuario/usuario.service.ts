import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { skip } from 'rxjs';
import { error } from 'console';


@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly productRepository: Repository<Usuario>,
  ){  }

  create(createUsuarioDto: CreateUsuarioDto) {

    const crearUsuario = this.productRepository.create(createUsuarioDto)

    return  this.productRepository.save(crearUsuario);
  }

  async findAll() {
    
    return await this.productRepository.find ({
      take:10,
      skip: 0
    })

  }

  async findOne(id_usuario: string) {

    let validac: Usuario;

    if (!isNaN(+id_usuario)){
      validac = await this.productRepository.findOneBy({id_usuario : +id_usuario})
    }else {
      validac = await this.productRepository.findOne({where:{correo : id_usuario.toLowerCase()}})
    }

    return validac;

    }
  

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const actualizar = await this.productRepository.preload(
      {
        id_usuario: id,
        ...updateUsuarioDto
      }
    );

    return await this.productRepository.save(actualizar)
  }

  async remove(id: number) {

     const borrar = await this.productRepository.find({where:{id_usuario : id}})

    return await this.productRepository.remove(borrar);
  }
}
