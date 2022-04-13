import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsDefined, IsEmail, IsEnum, IsOptional, IsString, IsUUID, Length, Matches } from "class-validator";

export enum StatusTypes {
    IN_CONTRACT = "in contract",
    ACTIVE = "active",
    INACTIVE = "inactive",
    HAS_ISSUES = "has issues"
}

//export const PhoneRegexp = new RegExp('^\(?\d{3}\)?[\s-]\d{3}[\s-]\d{4}$');

@Entity({name: "vendor"})
export class Vendor {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: "varchar", length: 45, unique: true })
    @IsString()
    @Length(0, 45)
    @IsDefined()
    vendor_name: string

    @Column({ type: "varchar", length: 45 })
    @IsString()
    @Length(0, 45)
    @IsDefined()
    first_name: string

    @Column({ type: "varchar", length: 45})
    @IsString()
    @Length(0, 45)
    @IsDefined()
    last_name: string

    @Column({ type: "text" })
    @IsString()
    @IsDefined()
    selection_method: string

    @Column({ type: "enum", enum: StatusTypes, nullable: true})
    @IsEnum(StatusTypes)
    status: string

    @Column({ type: "varchar", length: 12 })
    @IsString()
    @Length(0, 14)
    //@Matches(PhoneRegexp)
    @IsDefined()
    contact_phone_number: string

    @Column({ type: "text" })
    @IsEmail()
    @IsString()
    @IsDefined()
    contact_email: string

    @Column({ type: "text" })
    @IsString()
    @IsOptional()
    memo: string

    @Column({ type: "uuid" })
    @IsDefined()
    @IsUUID()
    @IsString()
    work_id: string

}
