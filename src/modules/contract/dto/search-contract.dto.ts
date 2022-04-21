import { IsEnum, IsUUID } from "class-validator"

export class SearchContractDto {

    text: string

    @IsUUID(4, { each: true })
    work_type: string[]

    @IsEnum(["ASC", "DESC"])
    sort: "ASC" | "DESC"
    
}