import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
   // DashboardComponent
  ]
})
export class ProductModule {
  constructor(){
    console.log("Product Module Woerlii")
  }
 }
