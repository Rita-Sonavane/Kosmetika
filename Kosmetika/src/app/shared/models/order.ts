import { LatLng } from "leaflet";
import { CartItem } from "../models/cartItem";

export class Order{
  id!:number;
  items!: CartItem[];
  totalPrice!:number;
  fname!: string;
  lname!:string;
  address!: string;
  addressLatLng?:LatLng;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}