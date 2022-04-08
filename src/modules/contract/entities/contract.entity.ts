import { IsDate, IsDefined, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, IsUUID, Max, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'contract'})
export class Contract {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "int" })
    @IsInt()
    @IsPositive()
    @IsDefined()
    amount: number

    @Column({ type: "date" })
    @IsDate()
    @IsDefined()
    contract_date: Date

    @Column({ type: "date" })
    @IsDate()
    @IsDefined()
    end_date: Date

    @Column({ type: "text", default: "" })
    @IsString()
    memo: string

    @Column({ type: "text", default: "" })
    @IsString()
    condition: string

    @Column({ type: "uuid" })
    @IsString()
    @IsUUID()
    @IsDefined()
    vendor_id: string

}
