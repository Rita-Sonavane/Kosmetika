import { Router } from "express";
import { hair_products } from "../model/hair_care";
import{Hair_CareModel} from "../models/hair_care.model";
import asyncHandler from 'express-async-handler';


const router = Router();

//seed
router.get("/seed", asyncHandler (
    async (req,res)=>{
      
    const hair_ProductCount = await Hair_CareModel.countDocuments();
    if (hair_ProductCount > 0) {
        res.send('Seed is already done!');
        return;
      }  
      await Hair_CareModel.create(hair_products);
      res.send('Seed Is Done!');
    })
  );  




router.get("/",asyncHandler (async (req,res)=>{
    const hair_careProducts = await Hair_CareModel.find();
    res.send(hair_careProducts);
})
);


router.get("/search/:searchTerm", async (req,res)=>{
    const searchTerm =  req.params.searchTerm;

    const hairProducts = hair_products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    res.send(hair_products);
});


router.get("/:Id",asyncHandler (async(req,res)=>{
    // const Id =  req.params.Id;
    const hairProduct = await Hair_CareModel.findById(req.params.Id);
    res.send(hairProduct);
})

);


export default router;