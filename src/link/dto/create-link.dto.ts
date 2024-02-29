import { IsString, IsUrl, isURL } from "class-validator";

export class CreateLinkDto {

    @IsString()
    @IsUrl()
    public readonly url: string

}
