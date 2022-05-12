import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductapiserviceService {

  private httpOptions;
  constructor(private httpClient:HttpClient ) { 

    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    }
  }
    
   
  
    getAllProducts():Observable<Iproduct[]>
    {
      return this.httpClient.get<Iproduct []>(`${environment.URL}/Product`) ;
    };

    getProductsByCategoryID(catID:number)
  {
    return this.httpClient.get<Iproduct[]>(`${environment.URL}/Product/getprdbyCatId/${catID}`)
  }
  getProductByID(prdID: number): Observable<Iproduct>
  {
    return this.httpClient.get<Iproduct>(`${environment.URL}/products/${prdID}`);
  }


  addNewProduct(newPrd: Iproduct): Observable<Iproduct>
  {
    return this.httpClient.post<Iproduct>(`${environment.URL}/product`, JSON.stringify(newPrd),this.httpOptions);
  }

  updateProduct(prdID: number, newPrd: Iproduct)
  {
    return this.httpClient.patch<Iproduct>(`${environment.URL}/Product/${prdID}`, JSON.stringify(newPrd),this.httpOptions);
  }
  deleteProduct(prdID:number)
  {
    return this.httpClient.delete<Iproduct>(`${environment.URL}/product/${prdID}`);
  }


}
