import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Length, Matches } from 'class-validator';
import { PhoneRegexp, StatusTypes } from '../entities/vendor.entity';
import { CreateVendorDto } from './create-vendor.dto';

export class UpdateVendorDto {

    @IsString()
    @Length(0, 45)
    @IsNotEmpty()
    @IsOptional()
    vendor_name: string

    @IsString()
    @Length(0, 45)
    @IsNotEmpty()
    @IsOptional()
    first_name: string

    @IsString()
    @Length(0, 45)
    @IsNotEmpty()
    @IsOptional()
    last_name: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    selection_method: string

    @IsEnum(StatusTypes)
    @IsOptional()
    status: string

    @IsString()
    @Length(0, 14)
    @Matches(PhoneRegexp)
    @IsNotEmpty()
    @IsOptional()
    contact_phone_number: string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    contact_email: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    memo: string

}
