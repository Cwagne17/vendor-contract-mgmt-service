import { IsDate, IsDefined, IsInt, IsPositive, IsString, IsUUID } from "class-validator"
import { IPostgresInterval } from "postgres-interval"

export class CreateContractDto {

    @IsInt()
    @IsPositive()
    @IsDefined()
    amount: number

    @IsDate()
    @IsDefined()
    contract_date: Date

    @IsDate()
    @IsDefined()
    duration: IPostgresInterval

    @IsString()
    memo: string

    @IsString()
    condition: string

    @IsString()
    @IsUUID()
    @IsDefined()
    vendor_id: string
    
}
