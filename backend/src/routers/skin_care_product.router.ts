import { Router } from "express";
import { sample_products } from "../model/skin_care";
import{SKin_CareModel} from "../models/skin_care.model";
import asyncHandler from 'express-async-handler';

const router = Router();


//seed
router.get("/seed", asyncHandler (
    async (req,res)=>{
    const skin_ProductCount = await SKin_CareModel.countDocuments();
    if (skin_ProductCount > 0) {
        res.send('Seed is already done!');
        return;
      }  
      await SKin_CareModel.create(sample_products);
      res.send('Seed Is Done!');
    })
  );  



//Skin_Care

router.get("/", asyncHandler (async (req,res)=>{
    const skin_careProducts = await SKin_CareModel.find();
    res.send(skin_careProducts);
})
);

router.get("/search/:searchTerm",(req,res)=>{
    const searchTerm =  req.params.searchTerm;

    const skinProducts = sample_products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    res.send(skinProducts);
});


router.get("/:Id",asyncHandler (async (req,res)=>{
    // const Id =  req.params.Id;
    const skinProduct = await SKin_CareModel.findById(req.params.Id);
    res.send(skinProduct);
})
);


export default router;