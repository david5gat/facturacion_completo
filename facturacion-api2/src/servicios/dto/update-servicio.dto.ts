import { PartialType } from '@nestjs/mapped-types';
import { CreateServiciosDto } from './create-servicio.dto';

export class UpdateServiciosDto extends PartialType(CreateServiciosDto) {}
