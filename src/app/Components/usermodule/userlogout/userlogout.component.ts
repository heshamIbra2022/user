import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/ٍServices/user-authentication.service';

@Component({
  selector: 'app-userlogout',
  templateUrl: './userlogout.component.html',
  styleUrls: ['./userlogout.component.scss']
})
export class UserlogoutComponent implements OnInit {
  isUserLogged: boolean=false;
  constructor(    private userAuthAPIService: UserAuthenticationService,
    ) { }

  ngOnInit(): void {
    this.isUserLogged= this.userAuthAPIService.isUserLoggged;
  }
  logout()
  {
    this.userAuthAPIService.logOut();
    this.isUserLogged= this.userAuthAPIService.isUserLoggged;
  }
}
