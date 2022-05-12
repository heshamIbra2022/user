import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryapiserviceService {
  getAllProducts() {
    throw new Error('Method not implemented.');
  }
  private httpOptions;
  constructor(private httpClient:HttpClient ) { 

    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
  }


  getAllCategories(): Observable<Icategory[]>
  {
    return this.httpClient.get<Icategory[]>(`${environment.URL}/Category/getAllCategories`);
       
  }





}
