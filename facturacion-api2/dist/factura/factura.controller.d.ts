import { FacturaService } from './factura.service';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
export declare class FacturaController {
    private readonly facturaService;
    constructor(facturaService: FacturaService);
    create(createFacturaDto: CreateFacturaDto): Promise<CreateFacturaDto & import("./entities/factura.entity").Factura>;
    findAll(): Promise<import("./entities/factura.entity").Factura[]>;
    findOne(id: string): Promise<import("./entities/factura.entity").Factura>;
    update(id: string, updateFacturaDto: UpdateFacturaDto): Promise<import("./entities/factura.entity").Factura>;
    remove(id: string): Promise<import("./entities/factura.entity").Factura[]>;
}
