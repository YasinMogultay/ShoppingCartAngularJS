import { Injectable } from '@angular/core';
//include product class
import {Product} from "../models/product";
import{HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const apiUrl ="http://localhost:3000/products/";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }
}
