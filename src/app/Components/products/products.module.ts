import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductssComponent } from './productss/productss.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/Guard/auth.guard';
import { ShopcartComponent } from './shopcart/shopcart.component';

const routes:Routes=[
  {path:'', redirectTo:'/products', pathMatch:'full'},
  {path: 'products', component:ProductssComponent},
  {path: 'shopcart', component:ShopcartComponent,canActivate:[AuthGuard]},
  {path: 'shoppingcart', component:ShoppingcartComponent,canActivate:[AuthGuard]},
  {path: 'products/:pid', component:ProductdetailsComponent}
]

@NgModule({
  declarations: [
    ProductssComponent,
    ProductdetailsComponent,
    ShoppingcartComponent,
    
    ShopcartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
  ]
})
export class ProductsModule { }
