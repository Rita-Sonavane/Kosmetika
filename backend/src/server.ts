import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";

import hair_care_Router from './routers/hair_care_Router';
import userRouter from './routers/user.router';
import skin_care_product from './routers/skin_care_product.router';
import orderRouter from './routers/order.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


//Skin_Care

app.use("/api/skin_care",skin_care_product);





/////////////////////////////////////////////////////

//Hair_Care

app.use("/api/hair_care",hair_care_Router);



app.use("/api/users",userRouter);

app.use("/api/orders", orderRouter);







//Port 

const port= 3001;

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})