import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/products";
import {ProductService} from "../Service/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string ="Products";
  public listProducts !: Product[];
  priceMax!: number;


  constructor(private serviceProduct:ProductService) {
    this.listProducts=serviceProduct.lProducts;
  }

  ngOnInit(): void {

  }

  buy(i:number) {
    this.listProducts[i].quantity--;
  }
  ajouterProduit(nouveauProduit:Product) {
    this.listProducts.push(nouveauProduit);
  }
  like(i: number) {
    this.listProducts[i].like++;
  }
}
