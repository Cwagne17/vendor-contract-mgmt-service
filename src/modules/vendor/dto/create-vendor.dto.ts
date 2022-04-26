import { IsDefined, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Length, Matches } from "class-validator"
import { PhoneRegexp, StatusTypes } from "../entities/vendor.entity"

export class CreateVendorDto {

    @IsString()
    @Length(0, 45)
    @IsNotEmpty()
    @IsDefined()
    vendor_name: string

    @IsString()
    @Length(0, 45)
    @IsNotEmpty()
    @IsDefined()
    first_name: string

    @IsString()
    @Length(0, 45)
    @IsNotEmpty()
    @IsDefined()
    last_name: string

    @IsString()
    @IsDefined()
    @IsNotEmpty()
    selection_method: string

    @IsEnum(StatusTypes)
    @IsNotEmpty()
    status: string

    @IsString()
    @Length(0, 14)
    @IsNotEmpty()
    @Matches(PhoneRegexp)
    @IsDefined()
    contact_phone_number: string

    @IsEmail()
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    contact_email: string

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    memo: string

    @IsDefined()
    @IsNotEmpty()
    @IsUUID()
    @IsString()
    work_id: string
    
}
