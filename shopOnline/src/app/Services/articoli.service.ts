import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iJsonProduct } from '../interfaces/i-json-product';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { iproducts } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root',
})
export class ArticoliService {
  apiUrl: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<iproducts[]> {
    return this.http
      .get<iJsonProduct>(this.apiUrl)
      .pipe(map((data) => data.products));
  }
}
