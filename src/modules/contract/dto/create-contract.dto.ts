import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator"

export class CreateContractDto {

    @IsInt()
    @IsPositive()
    @IsDefined()
    amount: number

    @IsDateString()
    @IsDefined()
    contract_date: Date

    @IsDateString()
    @IsDefined()
    contract_end_date: Date

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    memo: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    condition: string
    
}
