import { IsDate, IsDefined, IsInt, IsNotEmpty, IsPositive, IsString, IsUUID, Length } from "class-validator"

export class CreatePaymentInfoDto {

    @IsInt()
    @IsPositive()
    @IsDefined()
    amount: number

    @IsString()
    @IsDefined()
    @Length(0, 4)
    @IsNotEmpty()
    check_number: string

    @IsDate()
    @IsDefined()
    current_date: Date

    @IsString()
    @IsNotEmpty()
    memo: string

    @IsUUID()
    @IsNotEmpty()
    @IsDefined()
    contract_id: string
}
