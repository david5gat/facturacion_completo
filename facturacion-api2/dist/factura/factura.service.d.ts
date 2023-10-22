import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { Repository } from 'typeorm';
import { Factura } from './entities/factura.entity';
export declare class FacturaService {
    private readonly facturacionRepository;
    constructor(facturacionRepository: Repository<Factura>);
    create(createFacturaDto: CreateFacturaDto): Promise<CreateFacturaDto & Factura>;
    findAll(): Promise<Factura[]>;
    findOne(id: number): Promise<Factura>;
    update(id: number, updateFacturaDto: UpdateFacturaDto): Promise<Factura>;
    remove(id: number): Promise<Factura[]>;
}
