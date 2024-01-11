import { ProductCart } from "./product";

export class WislistItem{
    constructor (public product:ProductCart){
    }
    quantity:number = 1;
    price:number = this.product.price;

}