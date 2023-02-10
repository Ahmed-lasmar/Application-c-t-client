import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  parmurl!:any;
  constructor( private  activatedroute : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.parmurl=this.activatedroute.snapshot.params['id'];
  }

}
