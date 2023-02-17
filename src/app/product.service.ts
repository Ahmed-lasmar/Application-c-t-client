import { Injectable } from '@angular/core';
import {Product} from "./core/model/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public listProducts !: Product[];
  constructor() {
    this.listProducts=[
      {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }
  public addProduct(p:Product){
    this.listProducts.push(p);
    return this.listProducts;
  }

}
