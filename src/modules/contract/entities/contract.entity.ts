import { IsDate, IsDefined, IsInt, IsPositive, IsString, IsUUID } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IPostgresInterval } from 'postgres-interval';

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

    @Column({ type: "interval" })
    @IsDate()
    @IsDefined()
    duration: IPostgresInterval

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
