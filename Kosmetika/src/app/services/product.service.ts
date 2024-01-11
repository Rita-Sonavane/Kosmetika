import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HairProduct, Product } from '../shared/models/data-types';
import { sample_products } from '../shared/models/data';
import { hair_products } from '../shared/models/hair_care';
import { HttpClient } from '@angular/common/http';
import { HAIR_CARE, HAIR_CARE_BY_ID_URL, HAIR_CARE_BY_SEARCH_URL, SKIN_CARE, SKIN_CARE_BY_ID_URL, SKIN_CARE_BY_SEARCH_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public searchNew = new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }


  //Skin Care Products

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(SKIN_CARE);
  }


  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>('http://localhost:3001/api/skin_care/'+ id);
  }


  getAllProductsBySearch(searchTearm: string) {
    return this.http.get<Product[]>(SKIN_CARE_BY_SEARCH_URL + searchTearm);

  }



  //Hair Care Products

  getHairCareAll(): Observable<HairProduct[]> {
    return this.http.get<HairProduct[]>(HAIR_CARE);
  }

  getHairCareProduct(id: any): Observable<HairProduct> {
    return this.http.get<HairProduct>('http://localhost:3001/api/hair_care/' + id);
  }

  getAllHairCareProductsBySearch(searchTearm: string) {
    return this.http.get<HairProduct[]>(HAIR_CARE_BY_SEARCH_URL + searchTearm);

  }


}
