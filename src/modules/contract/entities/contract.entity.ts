import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WorkType } from "../../work-type/entities/work-type.entity";
import { Vendor } from "../../vendor/entities/vendor.entity";
import { PaymentInfo } from "../../payment-info/entities/payment-info.entity";

@Entity({name: 'contract'})
export class Contract {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "int" })
    amount: number

    @Column({ type: "date" })
    contract_date: Date

    @Column({ type: "date" })
    contract_end_date: Date

    @Column({ type: "text", default: "" })
    memo: string

    @Column({ type: "text", default: "" })
    condition: string

    @ManyToOne(() => Vendor, (vendor: Vendor) => vendor)
    vendor: Vendor

    @ManyToOne(() => WorkType, (workType: WorkType) => workType.type)
    workType: WorkType

    @OneToMany(() => PaymentInfo, (paymentInfo: PaymentInfo) => paymentInfo)
    paymentInfo: PaymentInfo

}
