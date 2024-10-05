import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateShippingDTO{
    @IsNotEmpty({message:"Phone cannot be empty"})
    @IsString({message:"Phone should be string"})
    phone: string;

    @IsOptional()
    @IsString({message:"name should be string"})
    name:string;

    @IsNotEmpty({message:"Address cannot be empty"})
    @IsString({message:"Address should be string"})
    address:string;

    @IsNotEmpty({message:"City cannot be empty"})
    @IsString({message:"City should be string"})
    city:string

    @IsNotEmpty({message:"postcode cannot be empty"})
    @IsString({message:"postcode should be string"})
    postCode:string;

    @IsNotEmpty({message:"State cannot be empty"})
    @IsString({message:"State should be string"})
    state:string;

    @IsNotEmpty({message:"Country cannot be empty"})
    @IsString({message:"Country should be string"})
    country:string;
}