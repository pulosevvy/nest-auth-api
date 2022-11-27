import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @IsString({message: "Только строковое значение"})
    @IsEmail({}, {message: "Не корректный email"})
    readonly email: string;

    @ApiProperty({example: '123456', description: 'Пароль'})
    @IsString({message: "Только строковое значение"})
    @Length(4, 16, {message: "Не меньше 4 и не больше 16"})
    readonly password: string;
}