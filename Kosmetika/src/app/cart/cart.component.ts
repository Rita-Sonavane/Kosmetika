import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { HairProduct, Product } from '../shared/models/data-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cart!:Cart;
  cartQuantity = 0;

  skincareProducts: Product[] = [];
  haircareProducts: HairProduct[] = [];


constructor(private cartService:CartService,private router:Router){
  this.cartService.getCartObservable().subscribe((cart)=>{
    this.cart = cart;
    this.cartQuantity = cart.totalCount;
    // console.log("this.cart",  this.cart)    
  });  
}

  ngOnInit():void{

  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.product.id,quantity);

  }


  //getAllCartProducts

  // getProductDetailRoute() {
  //      this.cart.items.forEach(product => {   
  //      console.log("SAGDJSAGD",product.product.hasOwnProperty('hair_type'),product)  
  //     if (product.product.hasOwnProperty('hair_type')) {
  //       this.router.navigateByUrl('/hair-care-product-detail/' + product.product.id);     
  //     } 
  //     else if (product.product.hasOwnProperty('skinType')) {
  //       this.router.navigateByUrl('/product-detail/' + product.product.id);
  //     }
      
  //     // else {       
  //     //   this.router.navigateByUrl('/product-detail/' + product.product.id);
  //     // }
  //   });




 //getSpecificCartProducts
    getProductDetailRoute(data:any) {   
      // console.log("SAGDJSAGD",data.hasOwnProperty('hair_type'),data.product.id);
     if (data.product.hasOwnProperty('hair_type')) {
       this.router.navigateByUrl('/hair-care-product-detail/' + data.product.id);     
     } 
      else {
       this.router.navigateByUrl('/product-detail/' + data.product.id);
     }   
  }



  

}
