import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/products";
import {ProductsComponent} from "../products/products.component";
import {ProductService} from "../Service/product.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ConsumProductService} from "../Service/consum-product.service";

@Component({
  selector: 'app-add product',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  p !: Product;

  constructor(private serviceProduct:ProductService,private route:Router,private CunsProd:ConsumProductService) { }

  addP (p:Product){
    this.p.like = 0;
    this.CunsProd.PostProducts(this.p).subscribe({
      next:()=>this.route.navigateByUrl("/products")
    });
  }

  ngOnInit(): void {
    this.p = new Product();
  }

}
