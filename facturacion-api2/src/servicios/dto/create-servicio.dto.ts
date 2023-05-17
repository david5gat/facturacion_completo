import { IsInstance, IsNumber, IsObject, IsString,validate } from "class-validator"
import { ValidationBuffer } from "../ValidationBuffer"



export class CreateServiciosDto {

    @IsNumber()
    id_servcio:number
    
    @IsString()
    nombreServicio: string
    
    @IsString()
    descripcion: string
    
    @IsNumber()
    valor : number

}
