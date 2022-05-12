import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenticationService } from '../ٍServices/user-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private userAuthAPIService: UserAuthenticationService,
    )
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userAuthAPIService.isUserLoggged)
      {
        return true;
      }
      else
      {
        alert ('You must login First...');
        this.router.navigate(['/user/userlogin']);
        return false
      }
        //retu
  }
  
}
