import { CreateServiciosDto } from './dto/create-servicio.dto';
import { UpdateServiciosDto } from './dto/update-servicio.dto';
import { Repository } from 'typeorm';
import { servicios } from './entities/servicio.entity';
export declare class ServiciosService {
    private readonly ServicioRepository;
    constructor(ServicioRepository: Repository<servicios>);
    create(createServicioDto: CreateServiciosDto): Promise<servicios>;
    findAll(): Promise<servicios[]>;
    findOne(id: number): Promise<servicios>;
    update(id: number, updateServicioDto: UpdateServiciosDto): Promise<servicios>;
    remove(id: number): Promise<servicios>;
}
