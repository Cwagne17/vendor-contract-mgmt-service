import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'contract'})
export class Contract {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

}
