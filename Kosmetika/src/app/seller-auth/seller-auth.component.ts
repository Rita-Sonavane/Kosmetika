import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignIn, Signup } from '../shared/models/data-types';



@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller: SellerService, private router: Router) { }
  showLogin: any = true;

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signup(data: Signup): void {
    console.log(data);
    this.seller.userSignUp(data);
  }

  signin(data: SignIn): void {
    // console.log(data);
    this.seller.userSignIn(data);
  }


  openSignIn() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }






}
