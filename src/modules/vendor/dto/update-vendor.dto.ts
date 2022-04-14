import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsString, IsUUID, Length, Matches } from 'class-validator';
import { PhoneRegexp, StatusTypes } from '../entities/vendor.entity';
import { CreateVendorDto } from './create-vendor.dto';

export class UpdateVendorDto extends PartialType(CreateVendorDto) {

    @IsString()
    @Length(0, 45)
    vendor_name?: string

    @IsString()
    @Length(0, 45)
    first_name?: string

    @IsString()
    @Length(0, 45)
    last_name?: string

    @IsString()
    selection_method?: string

    @IsEnum(StatusTypes)
    status?: string

    @IsString()
    @Length(0, 14)
    @Matches(PhoneRegexp)
    contact_phone_number?: string

    @IsEmail()
    @IsString()
    contact_email?: string

    @IsString()
    memo?: string

    @IsUUID()
    @IsString()
    work_id?: string
    
}
