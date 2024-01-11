import { Router } from "express";
import { sample_users } from "../model/skin_care";
const router = Router();
import jwt from "jsonwebtoken";
import{User, UserModel} from "../models/user.model";
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from 'bcryptjs';

//seed
router.get("/seed", asyncHandler (
    async (req,res)=>{
    const userCount = await UserModel.countDocuments();
    if (userCount > 0) {
        res.send('Seed is already done!');
        return;
      }
  
      await UserModel.create(sample_users);

      res.send('Seed Is Done!');
    })
  );  



router.post("/login",async (req, res) => {
  const {email, password} = req.body;
  const user = await UserModel.findOne({email});

    if(user && ((password === user.password))) {
      console.log("user",user)
    res.send(generateTokenReponse(user));
   }
   else{
     res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
   }

});



// const { email,password} =  req.body;
// const user = sample_users.find(user=> user.email === email && user.password === password);
// console.log(user,"user")
// if(user){
//     res.send(generateTokenResponse(user))
// }else{
//     res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
// }






router.post('/register', asyncHandler(
    async (req, res) => {
      const {email, password,fname,lname,gender,phone,address,birthDate,imageUrl} = req.body;
     
      const user = await UserModel.findOne({email});
      if(user){
        res.status(HTTP_BAD_REQUEST)
        .send('User is already exist, please login!');
        return;
      }

      // const encryptedPassword = await bcrypt.hash(password, 10);

      const newUser:User = {
        id:'',
        fname,
        lname,
        gender,
        phone,
        email: email.toLowerCase(),
        // password: encryptedPassword,
        password,
        address,
        birthDate,
        imageUrl,
        isAdmin: false
      }

      const dbUser = await UserModel.create(newUser);
       res.send(generateTokenReponse(dbUser));

    }

));



const generateTokenReponse = (user : User) => {
  const token = jwt.sign({
    id: user.id, email:user.email, isAdmin: user.isAdmin
  },"sometext",{
    expiresIn:"30d"
  });

  return {
    id: user.id,
    email: user.email,
    fname: user.fname,
    lname: user.lname,
    address: user.address,
    isAdmin: user.isAdmin,
    token: token
  };
}




// const generateTokenResponse = (user:any) =>{
//     const token = jwt.sign({
//         email:user.email, isAdmin:user.isAdmin
//     },"sometext",{
//         expiresIn:"30d"
// });

// user.token = token;
// return user;
// }



export default router;
