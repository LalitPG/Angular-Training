import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //  list:any=[
  //     {"id": 12,  "title":"Lotus", "description": "Wedding flower","price":24 , "likes":800, "imageurl":"/assets/images/lotus.jpg","discount":0,"stock":3},
  //     {"id": 13,  "title":"Rose", "description": "Valentine flower","price":14, "likes":4000, "imageurl":"/assets/images/rose.jpg","discount":0,"stock":1},
  //     {"id": 14,  "title":"Jasmine", "description": "Smelling flower","price":3, "likes":9000, "imageurl":"/assets/images/jasmine.jpg","discount":1,"stock":7},
  //     {"id": 15,  "title":"Tulip", "description": "Beautiful flower","price":16, "likes":3000, "imageurl":"/assets/images/tulip.jpg","discount":1,"stock":3},
  //     {"id": 16,  "title":"Lily", "description": "Delicate flower","price":9,"likes":6000, "imageurl":"/assets/images/lily.jpg","discount":0,"stock":1},
  //     {"id": 17,  "title":"Marigold", "description": "Festival flower","price":4,"likes":56000, "imageurl":"/assets/images/marigold.jpg","discount":0,"stock":0}
  // ];

  list : any=[];
  apiPath : string = "http://localhost:8000/flowers";

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<Product[]>
  { 
    return this.httpClient.get<Product[]>(this.apiPath);
  }
  
  getProductById(id:number):Observable<Product>
  { 
    console.log("selected product id="+ id);
    return this.httpClient.get<Product>(this.apiPath+"/"+id);
  }
  
  updateProduct(prod:any):Observable<void>
  {
     return this.httpClient.put<void>(this.apiPath+"/"+prod.id,prod);
  }

  InsertProdcut(prod:any):Observable<void>{
    return this.httpClient.post<void>(this.apiPath,prod);
  }
  deleteProduct(id:number):Observable<void>
  {
     return this.httpClient.delete<void>(this.apiPath+"/"+id)
  }
}