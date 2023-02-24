import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/products";
import {ProductsComponent} from "../products/products.component";
import {ProductService} from "../Service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add product',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  p !: Product;

  constructor(private serviceProduct:ProductService,private route:Router) { }

  addP (p:Product){
    this.serviceProduct.addProd(p);
    this.route.navigateByUrl("/products");
  }

  ngOnInit(): void {
    this.p = new Product();
  }

}
