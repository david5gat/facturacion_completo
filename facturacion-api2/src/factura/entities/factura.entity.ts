import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Factura {
    
    @PrimaryGeneratedColumn('increment')
    n_factura: number
    @Column()
    correo: string
    @Column()
    Servicios: string
    @Column()
    valor: number
}
