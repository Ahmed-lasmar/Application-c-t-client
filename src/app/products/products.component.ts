import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/products";
import {ProductService} from "../Service/product.service";
import {CalculService} from "../Service/calcul.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title : string ="Products";
  public listProducts !: Product[];
  priceMax!: number;
  emG!:number;


  constructor(private serviceProduct:ProductService,private sc:CalculService) {
    this.listProducts=serviceProduct.lProducts;
  }

  ngOnInit(): void {

  }

  calde0(){
    this.emG=this.sc.getNumberOf(this.listProducts,"quantity",0);
  }

  buy(i:number) {
    this.listProducts[i].quantity--;
    //this.calde0();
  }
  ajouterProduit(nouveauProduit:Product) {
    this.listProducts.push(nouveauProduit);
  }
  like(i: number) {
    this.listProducts[i].like++;
  }
}
