import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, Length } from "class-validator";
import { WorkType } from "src/modules/work-type/entities/work-type.entity";

export enum StatusTypes {
    IN_CONTRACT = "in contract",
    ACTIVE = "active",
    INACTIVE = "inactive",
    HAS_ISSUES = "has issues"
}

@Entity({name: "vendor"})
export class Vendor {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 45, unique: true })
    @Length(10, 20)
    vendor_name: string

    @Column({ type: "varchar", length: 45 })
    first_name: string

    @Column({ type: "varchar", length: 45})
    last_name: string

    @Column({ type: "text" })
    selection_method: string

    @Column({ 
        type: "enum", 
        enum: StatusTypes,
        nullable: true
    })
    status: string

    @Column({ type: "varchar", length: 14 })
    contact_phone_number: string

    @Column({ type: "text" })
    @IsEmail()
    contact_email: string

    @Column({ type: "text" })
    memo: string

    @ManyToOne((type) => WorkType, (worktype) => worktype.id)
    work_id: string

}
