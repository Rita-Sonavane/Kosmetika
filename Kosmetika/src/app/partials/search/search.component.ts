import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/data-types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  products:Product[]=[];  

  searchTerm:string='';
  searchTermNew:string='';

  constructor(activatedRoute:ActivatedRoute,private router:Router,private productService:ProductService){
    let skin_careObsevable:Observable<Product[]>;

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        this.searchTerm= params.searchTerm;
      }
      else{
        // this.products =this.productService.getAll();
        skin_careObsevable=this.productService.getAll();

        skin_careObsevable.subscribe((serveProduct)=>{
          this.products= serveProduct;
        })

      }
    })
  }

  ngOnInit():void{
  
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
