import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class OrderProductsDto{
    @IsNotEmpty({message:"Product cannot be empty"})
    id:number;

    @IsNumber({maxDecimalPlaces:2}, {message:"Price should be number & max decimal precission 2"})
    @IsPositive({message:"Price cannot be negative"})
    product_unit_price:number;

    @IsNumber({}, {message:"quantity should be number & max decimal precission 2"})
    @IsPositive({message:"quantity cannot be negative"})
    product_quantity:number;
}