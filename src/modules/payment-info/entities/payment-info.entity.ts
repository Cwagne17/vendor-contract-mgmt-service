import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "payment-info"})
export class PaymentInfo {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "int" })
    amount: number

    @Column({ type: "int" })
    check_number: number

    @Column({ type: "date"})
    current_date: Date

    @Column({ type: "text" })
    memo: string

    @Column({ type: "uuid" })
    contract_id: string
    
}
