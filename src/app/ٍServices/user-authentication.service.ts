import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { Icategory } from '../Models/icategory';
import { Ilogin } from '../Models/ilogin';
import { Iuser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  isLoggedSubject:BehaviorSubject<boolean>;
  private httpOptions;
  constructor(private httpClient:HttpClient,
    private jwtHelper :JwtHelperService
    
    ) { 
    this.isLoggedSubject=new BehaviorSubject<boolean>(this.isUserLoggged);
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      // "Authorization" : " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnRha2VObyI6IjQyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Inp5YWQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjU1ZGM3ZTM0LTVjODctNDM0NC1hMDg5LTllZDAxMTI4NjYzNCIsImp0aSI6IjYwMDAxZmY4LTUxZGMtNDE4YS1iZjg3LTljZjc4Yzc1ODZiMyIsImV4cCI6MTY1MjE0MTQ2OSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3NjkyIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.bJNLBE1n_7AihfLrM7bKdIRwFsJnpCfXmsparsFaPgo"
      })
    }
  }
  
 
 public data:any ="";
   login(log :Ilogin )
  { 
    this.httpClient.post<any>(`${environment.URL}/Account/login`,log ).subscribe(
      d=>
      {
        
       let x=this.jwtHelper.decodeToken(JSON.stringify( d))
      
       this.data=d ;
       this.data=x ;
if(x.name==log.userName ){
  localStorage.setItem("Token",`{"name":"${x.name}","id":"${x.Id}"}`);



  this.isLoggedSubject.next(true);
}

     
      }
    )

    //console.log(this.jwtHelper.decodeToken(JSON.stringify( this.data)));
   //  console.log(this.data)
     

    
      
  
    
     
    




      

      


  
  // let decodedJWT = JSON.parse(window.atob(userToken.split('.')[1]));
 // console.log(this.jwtHelper.decodeToken(userToken))

 
  }

  logOut()
  {
   let x:any = localStorage.getItem("Token");
  let y=JSON.parse(x);
  console.log(y.name);
    localStorage.removeItem("Token");
    localStorage.removeItem("orderid");
   
    this.isLoggedSubject.next(false);
  }

 get  isUserLoggged():boolean
  {
return (localStorage.getItem("Token"))?true:false;
  }


  isUserLoggedSubject ():Observable<boolean>
  {
    return this.isLoggedSubject.asObservable();
    
  }
  adduser(newuser: Iuser): Observable<Iuser>
  {
    return this.httpClient.post<Iuser>(`${environment.URL}/Account/Register`, JSON.stringify(newuser),this.httpOptions);
  }


}
