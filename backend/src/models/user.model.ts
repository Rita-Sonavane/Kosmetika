import { Schema, model } from 'mongoose';


export interface User {
    id: string;
    email: string;
    password: string;
    phone: string
    fname: string;
    lname: string;
    gender: string;
    address: string;
    birthDate: Date;
    imageUrl: string;
    isAdmin: boolean;
}


export const UserSchema = new Schema<User>({
    fname: {
        type: String,
        //  required: true
    },
    lname: {
        type: String,
        //  required: true
    },
    email: {
        type: String, unique: true,
        // required: true
    },
    password: {
        type: String,
        //  required: true
    },
    address: {
        type: String,
        //  required: true
    },
    birthDate:{
        type:Date,
    },
    imageUrl: {
         type:String,
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

export const UserModel = model<User>('user', UserSchema);