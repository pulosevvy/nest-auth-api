import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsString({message: "Должно быть стороковым значением"})
    readonly value: string;
    @IsNumber({}, {message: "Должно быть числовым значением"})
    readonly userId: number;
}