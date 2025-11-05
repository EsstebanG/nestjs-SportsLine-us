import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator'; // <-- Importamos la librería 'class-validator'. 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}

export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    username?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password?: string;

    @IsEmail()
    @IsNotEmpty()
    email?: string;
}
