import {model, Schema, Types} from 'mongoose';
import { Product, ProductSchema } from './product.model';
import { OrderStatus } from '../constants/order_status';


export interface LatLng{
    lat: string;
    lng: string;
}


export const LatLngSchema = new Schema<LatLng>(
    {
        lat: {type: String, required: true},
        lng: {type: String, required: true},
    }
);


export interface OrderItem{
    product: Product;
    price: number;
    quantity: number;
}


const OrderItemSchema = new Schema<OrderItem>({
       product: {type: ProductSchema},
       price: {type: Number},
       quantity: {type: Number}    
}
);

  
export interface Order{
    id:string;
    items: OrderItem[];
    totalPrice:number;
    fname: string;
    lname:string;
    address: string;
    addressLatLng:LatLng;
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}


const orderSchema = new Schema<Order>({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    address: {type: String, required: true},
    addressLatLng: {type: LatLngSchema, required: true},
    paymentId: {type: String},
    totalPrice: {type: Number, required: true},
    items: {type: [OrderItemSchema], required: true},
    status: {type: String, default: OrderStatus.NEW},
    user: {type: Schema.Types.ObjectId, required: true}
},{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});


export const OrderModel = model('order', orderSchema);