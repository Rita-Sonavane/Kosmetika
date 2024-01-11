import { ProductCart } from "./product";

export class CartItem{
    constructor (public product:ProductCart){
    }
    quantity:number = 1;
    price:number = this.product.price;

}