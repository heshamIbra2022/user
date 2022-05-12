import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { MainlayoutComponent } from './Components/mainlayout/mainlayout.component';

const routes: Routes = [
  {path:'',component:MainlayoutComponent,children:[
    {path:'home',component:HomeComponent},
{
  path: 'products', 
  loadChildren: () => import('src/app/Components/products/products.module').then(m => m.ProductsModule)
},

{
  path: 'user', 
  loadChildren: () => import('src/app/Components/usermodule/usermodule.module').then(m => m.UsermoduleModule)
},
  ] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
