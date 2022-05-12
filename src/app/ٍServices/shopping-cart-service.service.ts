import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ishoppingcartitem } from '../Models/ishoppingcartitem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  private httpOptions;
  constructor(private httpClient:HttpClient) {

    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       // "Authorization" : " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnRha2VObyI6IjQyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Inp5YWQiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjU1ZGM3ZTM0LTVjODctNDM0NC1hMDg5LTllZDAxMTI4NjYzNCIsImp0aSI6IjYwMDAxZmY4LTUxZGMtNDE4YS1iZjg3LTljZjc4Yzc1ODZiMyIsImV4cCI6MTY1MjE0MTQ2OSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo3NjkyIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.bJNLBE1n_7AihfLrM7bKdIRwFsJnpCfXmsparsFaPgo"

      })
    }
   }

   getCartItems():Observable<Ishoppingcartitem[]>
   {
     return this.httpClient.get<Ishoppingcartitem []>(`${environment.URL}/ShoppingOrder/getAllprdsOfOrders`,this.httpOptions) ;
   }; 

   addNewCartItem(newCart:Ishoppingcartitem): Observable<Ishoppingcartitem>
  {
    return this.httpClient.post<Ishoppingcartitem>(`${environment.URL}/ShoppingOrder`, JSON.stringify(newCart),this.httpOptions);
  }
  

  deleteCartItem(id?:number):Observable<{}>
  {

    return this.httpClient.delete(`${environment.URL}/ShoppingOrder/delete/${id}`,this.httpOptions);
    
  }
}
