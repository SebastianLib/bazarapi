import { Type } from "class-transformer";
import { CreateShippingDTO } from "./create-shipping.dto";
import { ValidateNested } from "class-validator";
import { OrderProductsDto } from "./order-products.dto";

export class CreateOrderDto {
    @Type(()=>CreateShippingDTO)
    @ValidateNested()
    shippingAddress:CreateShippingDTO

    @Type(()=>OrderProductsDto)
    @ValidateNested()
    orderedProducts:OrderProductsDto[];
}
