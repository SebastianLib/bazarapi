import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserSignInDto{

    @IsNotEmpty({message: 'email cannot be empty'})
    @IsEmail({},{message:"Plese provide a valid email"})
    email: string;

    @IsNotEmpty({message: 'password cannot be empty'})
    @MinLength(5, {message: 'Password minimum character should be 5'})
    password: string;
}