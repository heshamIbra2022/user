import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/ٍServices/user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLogged:boolean;
  constructor(private UserAuthService:UserAuthenticationService,
    private router:Router
    ) { 
      this.isUserLogged=this.UserAuthService.isUserLoggged;
    }

  ngOnInit(): void {
    this.UserAuthService.isUserLoggedSubject().subscribe(status=>{
      this.isUserLogged=status;
    })
  }


}
