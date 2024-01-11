import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { User } from '../shared/models/user';
import { Wishlist } from '../shared/models/Wishlist';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartQuantity = 0;
  wishlistQuantity =0;
  user!:User;
 constructor(private cartService:CartService,private userService:UserService,private wishlistService:WishlistService){
  cartService.getCartObservable().subscribe((newCart)=>{
    this.cartQuantity = newCart.totalCount;
  })

  userService.userObservable.subscribe((newUser) => {
    this.user = newUser;
  })

  wishlistService.getWishlistObservable().subscribe((newWishlist) =>{
  this.wishlistQuantity = newWishlist.totalCount;
  })
 }


 logout(){
  this.userService.logout();
}

get isAuth(){
  return this.user.token;
}
}
