import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('assets/data.json')
  }
}