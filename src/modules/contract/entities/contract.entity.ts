import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type: "uuid" })
    vendor_id: string

}
