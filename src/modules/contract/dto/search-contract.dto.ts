import { IsEnum, IsString, IsUUID } from "class-validator"

export class SearchContractDto {

    @IsString()
    text: string

    @IsUUID(4, { each: true })
    work_type: string[]

    @IsEnum(["ASC", "DESC"])
    sort: "ASC" | "DESC"
    
}