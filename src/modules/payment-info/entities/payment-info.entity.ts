import { IsDate, IsDefined, IsInt, IsPositive, IsString, IsUUID, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "payment-info"})
export class PaymentInfo {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "int" })
    @IsInt()
    @IsPositive()
    @IsDefined()
    amount: number

    @Column({ type: "varchar", length: 4 })
    @IsString()
    @IsDefined()
    @Length(0, 4)
    check_number: string

    @Column({ type: "date"})
    @IsDate()
    @IsDefined()
    current_date: Date

    @Column({ type: "text" })
    @IsString()
    memo: string

    @Column({ type: "uuid" })
    @IsString()
    @IsUUID()
    @IsDefined()
    contract_id: string
    
}
