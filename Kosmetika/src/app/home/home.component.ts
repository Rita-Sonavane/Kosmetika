import { Component } from '@angular/core';
import { HairProduct, Product } from '../shared/models/data-types';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { Wishlist } from '../shared/models/Wishlist';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = [];
  hairCareProducts: HairProduct[] = []

  selectedProduct: Product | any;
  selectedHairProduct: HairProduct | any;
  selectOralPrduct: HairProduct | any;

  //detail
  productdetail: HairProduct | any;

  constructor(private productService: ProductService, activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService,private wishlistService:WishlistService) {
    let productObservable: Observable<Product[]>;
    let hairproductObservable: Observable<HairProduct[]>;


    productObservable = this.productService.getAll();
    hairproductObservable = this.productService.getHairCareAll();



    this.productdetail = this.productService.getHairCareProduct('8');

  

   
   productObservable.subscribe((serveProduct) => {
      this.products = serveProduct;

      //skin
    this.selectedProduct = this.retrieveSpecificProduct('Crebeau Placenta Pearl Repair Eye Cream');

    console.log("check product", this.selectedProduct);

    });

    hairproductObservable.subscribe((serveProduct) => {
      this.hairCareProducts = serveProduct;
    
      //hair
    this.selectedHairProduct = this.retrieveSpecificHairProduct('Hyundai Bio Vitabrid Premium Scalp Shampoo 100 ML');

    //oral
    this.selectOralPrduct = this.retrieveSpecificHairProduct('Hyundai Bio Vitabrid Premium Scalp Shampoo 500 ML');
    });




  }


  //skin 1
  retrieveSpecificProduct(name: string): Product | any {
    return this.products.find(product => product.name === name);
  }

  //hair 1
  retrieveSpecificHairProduct(name: string): HairProduct | any {
    return this.hairCareProducts.find(product => product.name === name);
  }

  //oral 1
  retrieveSpecificOralProduct(name: string): HairProduct | any {
    return this.hairCareProducts.find(product => product.name === name);
  }


  //addToCart
  addTocart(data: any) {
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
