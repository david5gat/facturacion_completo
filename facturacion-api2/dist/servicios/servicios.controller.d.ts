import { ServiciosService } from './servicios.service';
import { CreateServiciosDto } from './dto/create-servicio.dto';
import { UpdateServiciosDto } from './dto/update-servicio.dto';
export declare class ServiciosController {
    private readonly serviciosService;
    constructor(serviciosService: ServiciosService);
    create(createServicioDto: CreateServiciosDto): Promise<import("./entities/servicio.entity").servicios>;
    findAll(): Promise<import("./entities/servicio.entity").servicios[]>;
    findOne(id: string): Promise<import("./entities/servicio.entity").servicios>;
    update(id: string, updateServicioDto: UpdateServiciosDto): Promise<import("./entities/servicio.entity").servicios>;
    remove(id: string): Promise<import("./entities/servicio.entity").servicios>;
}
