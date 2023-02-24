import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {OffresEmploiComponent} from "./offres-emploi/offres-emploi.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ProductdetailComponent} from "./productdetail/productdetail.component";
import {AddproductComponent} from "./addproduct/addproduct.component";
import {TodoListComponent} from "./todo-list/todo-list.component";

const routes: Routes =[
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'todo',component:TodoListComponent},
  {path:'products/add',component:AddproductComponent},
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
