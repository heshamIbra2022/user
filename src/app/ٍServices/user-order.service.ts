import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iuserorder } from '../Models/iuserorder';

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {
  private httpOptions;
  constructor( private httpClient:HttpClient) { 

    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // "Authorization" : " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnRha2VObyI6IjQyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Inp5YWQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjU1ZGM3ZTM0LTVjODctNDM0NC1hMDg5LTllZDAxMTI4NjYzNCIsImp0aSI6IjYwMDAxZmY4LTUxZGMtNDE4YS1iZjg3LTljZjc4Yzc1ODZiMyIsImV4cCI6MTY1MjE0MTQ2OSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3NjkyIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.bJNLBE1n_7AihfLrM7bKdIRwFsJnpCfXmsparsFaPgo"

      })
    }

  }

  addorder(neworder:Iuserorder): Observable<Iuserorder>
  {
    return this.httpClient.post<any>(`${environment.URL}/UserOrder/addorder`, JSON.stringify(neworder),this.httpOptions);
  }
  getorderByID(orderId: number): Observable<Iuserorder>
  {
    return this.httpClient.get<Iuserorder>(`${environment.URL}/UserOrder/getdetail/${orderId}`);
  }

}
