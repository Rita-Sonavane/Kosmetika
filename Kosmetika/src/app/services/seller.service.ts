import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SignIn, Signup } from '../shared/models/data-types';


@Injectable({
  providedIn: 'root'
})
export class SellerService {

  issellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private router:Router) { }


  userSignUp(data:Signup){
    return this.http.post("http://localhost:3000/seller",data,
    {observe:'response'}).subscribe((result)=>{
      this.issellerLoggedIn.next(true);
      localStorage.setItem("seller",JSON.stringify(result.body));
      this.router.navigate(["seller-home"]);
    });
  }


  reloadSeller(){
    if(localStorage.getItem("seller")){
      this.issellerLoggedIn.next(true);
      this.router.navigate(["seller-home"]);
    }

  }

  userSignIn(data:SignIn){
  console.log(data);
  this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    
  {observe:'response'}).subscribe((result:any)=>{
    if(result && result.body && result.body.length){
      localStorage.setItem("seller",JSON.stringify(result.body));
      this.router.navigate(["seller-home"]);
    }
    else{
      console.warn("Login Failed")
    }
   
  })
  }
  
}
