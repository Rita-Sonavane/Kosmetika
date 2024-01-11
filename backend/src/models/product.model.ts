import {Schema, model} from 'mongoose';


export class Product{
    id!:string;
    name!:string;
    price!:number;
    categories?: string[];
    favorite!:boolean;
    stars!: number;
    imageUrl!: string;
    type!:string;
  }


  export const ProductSchema = new Schema<Product>(
    {
        name: {type: String},
        price: {type: Number},
        categories: {type: [String]},
        favorite: {type: Boolean},
        stars: {type: Number},
        imageUrl: {type: String},
        type: {type: String},
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
);

export const ProductModel = model<Product>('product', ProductSchema);