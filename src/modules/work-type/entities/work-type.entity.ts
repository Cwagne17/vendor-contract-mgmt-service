import { Vendor } from "src/modules/vendor/entities/vendor.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "work-type"})
export class WorkType {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 45, unique: true })
    type: string

}
