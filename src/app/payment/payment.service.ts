import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

export class ProductService{

    constructor(private http:HttpClient){}

//     getOrder(): Observable<IProduct[]> {
//     return this.http.get<IProduct[]>(AppConstants.API_URL + 'product/all', httpOptions);
//   }

}