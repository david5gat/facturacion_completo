import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {


    @PrimaryGeneratedColumn('increment')
    id_usuario: number
    @Column()
    nombre: string
    @Column()
    apellido: string
    @Column()
    correo: string
    @Column()
    contraseña: string
    @Column()
    direccion: string
    @Column()
    telefono: number

}
