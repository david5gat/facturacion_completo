import { IsNumber, IsString } from 'class-validator';


export class CreateUsuarioDto {

    @IsString()
    id_usuario: number

    @IsNumber()
    nombre: string
    
    @IsString()
    apellido: string
    
    @IsString()
    correo: string
    
    @IsString()
    contraseña: string
    
    @IsString()
    direccion: string
    
    @IsNumber()
    telefono: number
}
