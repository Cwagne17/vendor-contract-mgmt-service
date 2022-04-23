import { IsString } from "class-validator";

export class SearchWorkTypesDto {

    @IsString()
    text: string
}