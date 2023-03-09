import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/products";
import {ProductService} from "../Service/product.service";
import {CalculService} from "../Service/calcul.service";
import {ConsumProductService} from "../Service/consum-product.service";
import {Router} from "@angular/router";

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


  constructor(private serviceProduct:ProductService,private sc:CalculService, private ConsProd:ConsumProductService,private CunsProd:ConsumProductService,private route:Router) {

  }

  ngOnInit(): void {
    this.ConsProd.GetProducts().subscribe({
      next:(data)=>this.listProducts=data,
    });
  }

  calde0(){
    this.emG=this.sc.getNumberOf(this.listProducts,"quantity",0);
  }

  buy(i:number) {
    this.listProducts[i].quantity--;
    this.ConsProd.UpdateProducts(this.listProducts[i]).subscribe();
    //this.calde0();
  }
  ajouterProduit(nouveauProduit:Product) {
    this.listProducts.push(nouveauProduit);
  }

  delete(i:number){
    this.CunsProd.DeleteProduct(this.listProducts[i]).subscribe({
      next:()=>this.ngOnInit()
    });
  }
  like(i: number) {
    this.listProducts[i].like++;
    this.ConsProd.UpdateProducts(this.listProducts[i]).subscribe();
  }
}
