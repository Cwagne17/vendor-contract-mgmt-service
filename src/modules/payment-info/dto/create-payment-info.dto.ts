import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsPositive, IsString, Length } from "class-validator"

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

    @IsDateString()
    @IsDefined()
    current_date: Date

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    memo: string

}
