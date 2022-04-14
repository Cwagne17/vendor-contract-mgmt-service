import { IsDefined, IsEmail, IsEnum, IsOptional, IsString, IsUUID, Length, Matches } from "class-validator"
import { PhoneRegexp, StatusTypes } from "../entities/vendor.entity"

export class CreateVendorDto {

    @IsString()
    @Length(0, 45)
    @IsDefined()
    vendor_name: string

    @IsString()
    @Length(0, 45)
    @IsDefined()
    first_name: string

    @IsString()
    @Length(0, 45)
    @IsDefined()
    last_name: string

    @IsString()
    @IsDefined()
    selection_method: string

    @IsEnum(StatusTypes)
    status: string

    @IsString()
    @Length(0, 14)
    @Matches(PhoneRegexp)
    @IsDefined()
    contact_phone_number: string

    @IsEmail()
    @IsString()
    @IsDefined()
    contact_email: string

    @IsString()
    @IsOptional()
    memo: string

    @IsDefined()
    @IsUUID()
    @IsString()
    work_id: string
    
}
