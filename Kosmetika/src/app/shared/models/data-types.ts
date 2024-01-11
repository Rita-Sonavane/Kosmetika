export interface Signup{

    name:string,
    email:string,
    password:string

}

export interface SignIn{

    email:string,
    password:string

}


export class Product{
    id!:string;
    name!:string;
    price!:string;
    // favorite!:string;
    imageUrl!:string;
    skinType!:string;
    spf!:string;
    Conscious!:string;
    brand!:string;
    item_form!:string;
    item_volume!:string;
    discription!:string

}



export class HairProduct{
    id!:string;
    name!:string;
    price!:string;
    imageUrl!:string;
    concern!:string;
    hair_type!:string;
    formulation!:string;
    Conscious!:string;
    brand!:string;
    item_form!:string;
    item_volume!:string;
    discription!:string
}