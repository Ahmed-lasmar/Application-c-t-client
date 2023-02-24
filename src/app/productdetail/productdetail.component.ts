import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from "../Service/product.service";
import {Product} from "../core/model/products";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  parmurl!:any;
  constructor( private  activatedroute : ActivatedRoute,private  prod:ProductService) {

  }
  p!:Product;

  ngOnInit(): void {
    this.parmurl=this.activatedroute.snapshot.params['id'];
    this.p=this.prod.lProducts[this.parmurl-1];
  }

}
