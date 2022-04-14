import { IsEnum, IsUUID } from "class-validator"
import { StatusTypes } from "../entities/vendor.entity"

export class SearchVendorsDto {

    text: string

    @IsUUID(4, { each: true })
    work_type: string[]

    @IsEnum(StatusTypes)
    status: string[]

    @IsEnum(["ASC", "DESC"])
    sort: "ASC" | "DESC"
    
}