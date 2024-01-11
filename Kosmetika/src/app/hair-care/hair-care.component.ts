import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HairProduct } from '../shared/models/data-types';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { WishlistService } from '../services/wishlist.service';
import { Wishlist } from '../shared/models/Wishlist';
import { ProductCart } from '../shared/models/product';


@Component({
  selector: 'app-hair-care',
  templateUrl: './hair-care.component.html',
  styleUrls: ['./hair-care.component.css']
})
export class HairCareComponent implements OnInit {

  public hairCareProducts: HairProduct[] = [];

  filterCategory: HairProduct[] = [];

  searcKey: any = '';

  wishlist: any[] = [];


  constructor(private productService: ProductService, activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService, private wishlistService: WishlistService) {
    let productObservable: Observable<HairProduct[]>;


    activatedRoute.params.subscribe((params) => {

      if (params.searchTerm) {
        productObservable = this.productService.getAllHairCareProductsBySearch(params.searchTerm);

      }
      else {
        productObservable = this.productService.getHairCareAll();
        productObservable = this.productService.getHairCareAll();
      }

      this.productService.searchNew.subscribe((val: any) => {
        this.searcKey = val;
        console.log("searchkey", this.searcKey);
      })

      productObservable.subscribe((serveProduct) => {
        this.hairCareProducts = serveProduct;
        this.filterCategory = serveProduct;
        // this.isSelected = false;
      });


      // this.filterCategory.forEach((item)=>{

      // })


      //Get All Wishlist Items
      wishlistService.getWishlistObservable().subscribe((newWishlist) => {
        newWishlist.items.forEach((item) => {
          console.log("SAGDJSAGD", item.product.hasOwnProperty('hair_type'));
   
          this.wishlist = newWishlist.items
            .filter(item => item.product.hasOwnProperty('hair_type'))
            .map(item => item.product);
          console.log("itms", this.wishlist);

        })
      });

    });

  }

  ngOnInit(): void {

  }


  isItemInWishlist(item: any): boolean {
    // Check if the item is in the wishlist array
    return this.wishlist.some(wishlistItem => wishlistItem.id === item.id);
  }



  selectedCategories: string[] = [];


  filter(category: string) {
    console.log("Inside filter", category);

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
    this.filterCategory = this.hairCareProducts.filter((res: any) => {
      if (this.selectedCategories.length === 0) {
        // If no categories are selected, return all products.
        return true;
      }

      // Check if the product matches any of the selected categories.
      return this.selectedCategories.some(selectedCategory => {
        return (
          res.concern === selectedCategory ||
          res.hair_type === selectedCategory ||
          res.formulation === selectedCategory ||
          res.Conscious === selectedCategory
        );
      });
    });
  }


  //addToCart
  addTocart(data: any) {
    //console.log("Inside wishlist hair",data); 
    this.cartService.addTocart(data);
    this.router.navigateByUrl('/cart');
  }

  addToWishlist(data: any) {
    // data.favorite == true;

    // console.log("Inside wishlist hair",data.favorite); 
    this.wishlistService.addTowishlist(data);
    this.router.navigateByUrl('/wishlist');
  }

}
