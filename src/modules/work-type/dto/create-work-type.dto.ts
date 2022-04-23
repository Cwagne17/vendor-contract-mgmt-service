import { IsString, IsDefined, Length, IsNotEmpty } from "class-validator";

export class CreateWorkTypeDto {

    @IsString()
    @IsDefined()
    @Length(0, 45)
    @IsNotEmpty()
    type: string

}
