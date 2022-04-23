import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsPositive, IsDefined, IsString, Length, IsDate } from 'class-validator';
import { CreatePaymentInfoDto } from './create-payment-info.dto';

export class UpdatePaymentInfoDto extends PartialType(CreatePaymentInfoDto) {

    @IsInt()
    @IsPositive()
    @IsDefined()
    amount: number

    @IsString()
    @IsDefined()
    @Length(0, 4)
    check_number: string

    @IsDate()
    @IsDefined()
    current_date: Date

    @IsString()
    memo: string

}
