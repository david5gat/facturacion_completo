import { IsNumber, IsString } from "class-validator"

export class CreateFacturaDto {

    @IsNumber()
    n_factura: number
    @IsString()
    correo: string
    @IsString()
    Servicios: string
    @IsNumber()
    valor: number
}
