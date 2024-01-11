import { Component } from '@angular/core';
import { Wishlist } from '../shared/models/Wishlist';
import { HairProduct, Product } from '../shared/models/data-types';
import { WishlistService } from '../services/wishlist.service';
import { Router } from '@angular/router';
import { WislistItem } from '../shared/models/wishlistItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  wishlist!:Wishlist;
  wishlistQuantity = 0;


  skincareProducts: Product[] = [];
  haircareProducts: HairProduct[] = [];

  constructor(private wishlistService:WishlistService,private router:Router,private cartService:CartService){
    this.wishlistService.getWishlistObservable().subscribe((wishlist)=>{
      this.wishlist = wishlist;
      this.wishlistQuantity= wishlist.totalCount;
    })
  }


  removeFromWishlist(wishlistItem:WislistItem){
    this.wishlistService.removeFromWishlist(wishlistItem.product.id);
  }

  changeQuantity(wishlistItem:WislistItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.wishlistService.changeQuantity(wishlistItem.product.id,quantity);

  }


  getProductDetailRoute(data:any) {   
    // console.log("SAGDJSAGD",data);
   
   if (data.product.hasOwnProperty('hair_type')) {
    console.log("SAGDJSAGD",data.product.hasOwnProperty('hair_type'),data.product.id);
     this.router.navigateByUrl('/hair-care-product-detail/' + data.product.id);     
   } 
    else {
     this.router.navigateByUrl('/product-detail/' + data.product.id);
   }   
}


 //addToCart
 addTocart(data:any) {
  // console.log("Inside Cart",data); 
   this.cartService.addTocart(data.product);
   this.router.navigateByUrl('/cart');
}


}
