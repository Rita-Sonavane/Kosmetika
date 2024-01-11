import { Injectable } from '@angular/core';
import { ProductCart } from '../shared/models/product';
import { Wishlist } from '../shared/models/Wishlist';
import { BehaviorSubject, Observable } from 'rxjs';
import { WislistItem } from '../shared/models/wishlistItem';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist: Wishlist  = this.getwishlistFromLocalStorage();

  private wishlistSubject: BehaviorSubject<Wishlist> = new BehaviorSubject(this.wishlist);

  constructor(private toastrService:ToastrService) { }

  addTowishlist(product: ProductCart) :void{
    // console.log("Inside Wishlist Service add to wishlist",product);

    if (!this.wishlist.items) {
      this.wishlist.items = []; // Ensure items is an array
    }
    
    let wishlistItem = this.wishlist.items.find(item => item.product.id === product.id);
    if (wishlistItem){
      this.toastrService.error(`Product is already exist!`);
      return;
    }
    

    product.favorite=true;
    this.wishlist.items.push(new WislistItem(product));
    this.setWishlistToLocalStorage();
    this.toastrService.success(
      `Product Added To Wishlist!`,
      // 'Login Successful'
      );
  }


  getWishlistObservable(): Observable<Wishlist> {
    return this.wishlistSubject.asObservable();
  }


  removeFromWishlist(productId: string): void {
    
   const productFind:any = this.wishlist.items.find(product => product.product.id === productId);
   
   productFind.product.favorite= false;

  //  console.log("Inside Wishlist Service add to wishlist",productFind)
    
    this.wishlist.items = this.wishlist.items
      .filter(item => item.product.id != productId);

    
    this.setWishlistToLocalStorage();
  }


  changeQuantity(productId: string, quantity: number) {
    let wishlistItem = this.wishlist.items
      .find(item => item.product.id === productId);
    if (!wishlistItem) return;

    wishlistItem.quantity = quantity;
    wishlistItem.price = quantity * wishlistItem.product.price;
    this.setWishlistToLocalStorage();
  }

  clearWishlist() {
    this.wishlist = new Wishlist();
    this.setWishlistToLocalStorage();
  }


  getWishlist(): Wishlist {
    return this.wishlistSubject.value;
  }


  private setWishlistToLocalStorage(): void {
    this.wishlist.totalPrice = this.wishlist.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.wishlist.totalCount = this.wishlist.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const WishlistJson = JSON.stringify(this.wishlist);
    localStorage.setItem('Wishlist', WishlistJson);
    this.wishlistSubject.next(this.wishlist);
  }

  private getwishlistFromLocalStorage(): Wishlist {
    const WishlistJson = localStorage.getItem('Wishlist');
    return WishlistJson ? JSON.parse(WishlistJson) : new Wishlist();
  }


}
