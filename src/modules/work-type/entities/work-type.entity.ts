import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "work-type"})
export class WorkType {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 45, unique: true })
    type: string

}
