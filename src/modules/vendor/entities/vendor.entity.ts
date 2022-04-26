import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorkType } from "../../work-type/entities/work-type.entity";

export enum StatusTypes {
    IN_CONTRACT = "in contract",
    ACTIVE = "active",
    INACTIVE = "inactive",
    HAS_ISSUES = "has issues"
}

export const PhoneRegexp = new RegExp(/\(?\d{3}\)?[\s-]\d{3}[\s-]\d{4}/);

@Entity({name: "vendor"})
export class Vendor {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 45, unique: true })
    vendor_name: string

    @Column({ type: "varchar", length: 45 })
    first_name: string

    @Column({ type: "varchar", length: 45})
    last_name: string

    @Column({ type: "text" })
    selection_method: string

    @Column({ type: "enum", enum: StatusTypes, nullable: true})
    status: string

    @Column({ type: "varchar", length: 12 })
    contact_phone_number: string

    @Column({ type: "text" })
    contact_email: string

    @Column({ type: "text" })
    memo: string

    @ManyToOne(() => WorkType, (workType: WorkType) => workType.type)
    workType: WorkType

}
