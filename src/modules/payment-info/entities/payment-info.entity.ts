import { Contract } from "../../contract/entities/contract.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "payment-info"})
export class PaymentInfo {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "int" })
    amount: number

    @Column({ type: "varchar", length: 4 })
    check_number: string

    @Column({ type: "date"})
    current_date: Date

    @Column({ type: "text" })
    memo: string

    @ManyToOne(() => Contract, (contract: Contract) => contract)
    contract: Contract
    
}
