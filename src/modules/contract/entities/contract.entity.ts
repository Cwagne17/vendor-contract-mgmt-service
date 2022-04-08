import { Vendor } from "src/modules/vendor/entities/vendor.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({name: 'contract'})
export class Contract {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "int" })
    amount: string

    @Column({ type: "date" })
    contract_date: Date

    @Column({ type: "date" })
    end_date: Date

    @Column({ type: "text" })
    memo: string

    @Column({ type: "text" })
    condition: string

    @ManyToOne((type) => Vendor, (vendor) => vendor.id)
    vendor_id: string

}
