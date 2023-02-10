import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {OffresEmploiComponent} from "./offres-emploi/offres-emploi.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ProductdetailComponent} from "./productdetail/productdetail.component";

const routes: Routes =[
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'offres',component:OffresEmploiComponent},
  {path:'product/:id',component:ProductdetailComponent},
  {path:'**',pathMatch:'full', component:PagenotfoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
