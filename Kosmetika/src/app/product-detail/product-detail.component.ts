import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/models/data-types';
import { CartService } from '../services/cart.service';
import { sample_products } from '../shared/models/data';
import { CartItem } from '../shared/models/cartItem';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productdetail: Product | any;


  constructor(private activaRote: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router) {
    //New

    activaRote.params.subscribe((params) => {

      
      if(params.id){
        productService.getProduct(params.id).subscribe(serveProduct =>{
          this.productdetail = serveProduct;
        })
      }

    });

  }


  ngOnInit(): void {
    // let productId = this.activaRote.snapshot.paramMap.get('id');

    // this.productdetail = this.productService.getProduct(productId);

    // console.log("productId", this.productdetail);    

  }

  //addToCart
  addTocart() {
    // console.log("productcheck",product);
    this.cartService.addTocart(this.productdetail);
    this.router.navigateByUrl('/cart');
  }
}
