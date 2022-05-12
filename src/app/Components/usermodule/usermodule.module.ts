import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserlogoutComponent } from './userlogout/userlogout.component';

const routes:Routes=[
  {path:'', redirectTo:'/user', pathMatch:'full'},
  
  {path: 'userlogin', component:UserloginComponent},
  {path: 'userlogout', component:UserlogoutComponent},
  {path: 'userregister', component:UserregisterComponent},
  
]


@NgModule({
  declarations: [
    UserregisterComponent,
    UserloginComponent,
    UserlogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UsermoduleModule { }
