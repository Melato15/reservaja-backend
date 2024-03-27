/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  readonly id: number;
  
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}
