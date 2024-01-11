import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { HairProduct } from 'src/app/shared/models/data-types';

@Component({
  selector: 'app-hair-search',
  templateUrl: './hair-search.component.html',
  styleUrls: ['./hair-search.component.css']
})
export class HairSearchComponent {

  products:HairProduct[]=[];
  searchTerm:string='';
  searchTermNew:string='';

  constructor(activatedRoute:ActivatedRoute,private router:Router,private productService:ProductService){
    let productObservable:Observable<HairProduct[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        this.searchTerm= params.searchTerm;
      }
      else{
        productObservable =this.productService.getHairCareAll();
      }

      productObservable.subscribe((serveProduct)=>{
        this.products = serveProduct;
      });
    })
  }


//  search(term:string):void{
//   if(term){
//     this.router.navigateByUrl('/search/'+term);
//   }
//  }


 searchNew(event:any){
    this.searchTermNew = (event.target as HTMLInputElement).value;
    this.productService.searchNew.next(this.searchTermNew);
  }


}
