import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { retry } from 'rxjs';
import { Ilogin } from 'src/app/Models/ilogin';
import { Iuserorder } from 'src/app/Models/iuserorder';
import { UserAuthenticationService } from 'src/app/ٍServices/user-authentication.service';
import { UserOrderService } from 'src/app/ٍServices/user-order.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  userRegisterFormGroup: FormGroup;
  isUserLogged: boolean=false;
  constructor(private fb: FormBuilder,
    private userAuthAPIService: UserAuthenticationService,
private userorderapiservice:UserOrderService
    ) {
    this.userRegisterFormGroup = fb.group({
      userName: [''],
      
      
       password: [''],
       
      
     }, );


   }

  
  ngOnInit(): void {
    this.isUserLogged= this.userAuthAPIService.isUserLoggged;
  }
  get userName() {
    return this.userRegisterFormGroup.controls['userName'];
  }
  get password() {
    return this.userRegisterFormGroup.controls['password'];
  }
  login()
  {
    var log :Ilogin={password:this.password.value,
      userName:this.userName.value
    }
  this.userAuthAPIService.login(log);
    this.isUserLogged= this.userAuthAPIService.isUserLoggged;
    this.createorder();
  }
  createorder()
  {
    if(localStorage.getItem("Token")){
      let x:any=localStorage.getItem("Token");
      let y=JSON.parse(x);
      var iuserorder:Iuserorder={applicationUserId:y.id};

      this.userorderapiservice.addorder(iuserorder).subscribe((d)=>{
console.log(d);
let x:any=d.id
localStorage.setItem("orderid",x);

      }

       
      )
    }
    
  }
  
}
