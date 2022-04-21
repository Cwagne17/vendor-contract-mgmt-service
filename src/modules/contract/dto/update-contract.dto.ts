import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsPositive, IsDefined, IsDate, IsString, IsUUID } from 'class-validator';
import { IPostgresInterval } from 'postgres-interval';
import { CreateContractDto } from './create-contract.dto';

export class UpdateContractDto extends PartialType(CreateContractDto) {

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
    
}
