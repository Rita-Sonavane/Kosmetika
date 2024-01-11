import { Component, OnInit } from '@angular/core';
import { HairProduct } from '../shared/models/data-types';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-hair-care-product-detail',
  templateUrl: './hair-care-product-detail.component.html',
  styleUrls: ['./hair-care-product-detail.component.css']
})
export class HairCareProductDetailComponent implements OnInit{


  productdetail: HairProduct | any;
  
  constructor(private activaRote: ActivatedRoute, private productService: ProductService, private cartService: CartService,private router:Router) {
    //New

    activaRote.params.subscribe((params) => {

      if(params.id){
        productService.getHairCareProduct(params.id).subscribe(serveProduct =>{
          this.productdetail = serveProduct;
        })
      }

    });
   }


  ngOnInit(): void {
    // let productId = this.activaRote.snapshot.paramMap.get('id');

    // this.productdetail = this.productService.getHairCareProduct(productId);
  }



  //addToCart
  addTocart() {
    console.log("vhjgsad",this.productdetail);
    this.cartService.addTocart(this.productdetail);
    this.router.navigateByUrl('/cart');
  }
}
