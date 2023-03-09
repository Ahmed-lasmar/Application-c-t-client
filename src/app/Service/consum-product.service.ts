import { Injectable } from '@angular/core';
import {Product} from "../core/model/products";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsumProductService {

  apiUrl : string = "http://localhost:3000/products";
  httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }

  GetProducts(){
    return this.http.get<Product[]>(this.apiUrl);
  }

  PostProducts(p:Product){
   return  this.http.post<Product>(this.apiUrl,p,this.httpOptions);
  }

  UpdateProducts(p:Product){
    return this.http.put<Product>(this.apiUrl+'/'+ p.id, p, this.httpOptions);
  }

  DeleteProduct(p:Product){
    return this.http.delete<Product>(this.apiUrl+'/'+p.id);
  }
}
