import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { TryApiService } from '../services/try-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/data-types';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-skin-care',
  templateUrl: './skin-care.component.html',
  styleUrls: ['./skin-care.component.css']
})
export class SkinCareComponent {

  isChecked: boolean = false;
  isCheckedAll:boolean= false;

  products: Product[] = [];
  searcKey: any = '';

  public productList: any;
  public filterCategory: Product[] = [];
  wishlist: any[] = [];

  constructor(private productService: ProductService, private api: TryApiService, activatedRoute: ActivatedRoute,private router: Router,private cartService:CartService,private wishlistService:WishlistService) {
  let productObservable:Observable<Product[]>;

    activatedRoute.params.subscribe((params) => {

      if (params.searchTerm) {
       productObservable= this.productService.getAllProductsBySearch(params.searchTerm);
      }
      else {
        productObservable = this.productService.getAll();
        productObservable = this.productService.getAll();

  
      }

      this.productService.searchNew.subscribe((val:any)=>{
        this.searcKey = val;   
       
      })

      productObservable.subscribe((serveProduct)=>{
        this.products = serveProduct;
        this.productList  = serveProduct;
        this.filterCategory  = serveProduct;
      });


        //Get All Wishlist Items
        wishlistService.getWishlistObservable().subscribe((newWishlist) => {
          newWishlist.items.forEach((item) => {
            console.log("SAGDJSAGD", item.product.hasOwnProperty('skinType'));
     
            this.wishlist = newWishlist.items
              .filter(item => item.product.hasOwnProperty('skinType'))
              .map(item => item.product);
            console.log("itms", this.wishlist);
  
          })
        });

   
    })

  }


  isItemInWishlist(item: any): boolean {
    // Check if the item is in the wishlist array
    return this.wishlist.some(wishlistItem => wishlistItem.id === item.id);
  }


  // filter(category: string) {
  //   // if (this.isChecked) {
  //     console.log("Inside filter");
  //     this.filterCategory = this.products
  //       .filter((res: any) => {
  //         if (res.skinType == category || category == '') {
  //           return res;
  //         }
  //         else if (res.spf == category || category == '') {
  //           return res;
  //         }
  //         else if (res.Conscious == category || category == '') {
  //           return res;
  //         }

  //       })
  //   // }

  //   // else if(this.isCheckedAll){
  //   //   this.filterCategory = this.productService.getAll();
  //   // }

  // }

  

selectedCategories: string[] = []; // Initialize an array to store selected categories.

filter(category: string) {
    console.log("Inside filter");

    // Check if the category is already selected.
    const index = this.selectedCategories.indexOf(category);

    if (index === -1) {
        // If the category is not in the selected categories, add it.
        this.selectedCategories.push(category);
    } else {
        // If the category is already selected, remove it.
        this.selectedCategories.splice(index, 1);
    }

    // Now filter the products based on the selected categories.
    this.filterCategory = this.products.filter((res: any) => {
        if (this.selectedCategories.length === 0) {
            // If no categories are selected, return all products.
            return true;
        }

        // Check if the product matches any of the selected categories.
        return this.selectedCategories.some(selectedCategory => {
            return (
                res.skinType === selectedCategory ||
                res.spf === selectedCategory ||
                res.Conscious === selectedCategory
            );
        });
    });
}


 //addToCart
 addTocart(data:any) {
  // console.log("Inside Cart",data);
  
   this.cartService.addTocart(data);
   this.router.navigateByUrl('/cart');
}


addToWishlist(data:any){
  // data.favorite == true;
  
  // console.log("Inside wishlist hair",data.favorite); 
  this.wishlistService.addTowishlist(data);
  this.router.navigateByUrl('/wishlist');
}


}
