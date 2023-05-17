import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class servicios {

    @PrimaryGeneratedColumn('increment')
    id_servcio:number
    
    @Column()
    nombreServicio: string

    @Column()
    descripcion: string

    @Column()
    valor : number


}
