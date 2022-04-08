import { Contract } from "src/modules/contract/entities/contract.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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

    @ManyToOne((type) => Contract, (contract) => contract.id)
    contract_id: string
    
}
