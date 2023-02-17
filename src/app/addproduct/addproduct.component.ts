import { Component, OnInit } from '@angular/core';
import {Product} from "../core/model/products";
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  p !: Product;

  constructor() { }

  ajouterProduit(newProduit:Product) {

  }

  ngOnInit(): void {
    this.p = new Product();
  }

}
