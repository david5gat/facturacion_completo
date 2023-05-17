import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { CreateServiciosDto } from './dto/create-servicio.dto';
import { UpdateServiciosDto } from './dto/update-servicio.dto';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Post()
  create(@Body() createServicioDto: CreateServiciosDto) {
    return this.serviciosService.create(createServicioDto);
  }

  @Get()
  findAll() {
    return this.serviciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviciosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicioDto: UpdateServiciosDto) {
    return this.serviciosService.update(+id, updateServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviciosService.remove(+id);
  }
}
