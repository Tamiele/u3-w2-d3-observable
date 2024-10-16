import { iproducts } from './../interfaces/i-product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iJsonProduct } from '../interfaces/i-json-product';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticoliService {
  apiUrl: string = 'https://dummyjson.com/products';

  cart$ = new Subject<iproducts>();

  private preferitiSubject = new BehaviorSubject<iproducts[]>([]);
  articoliPreferiti$ = this.preferitiSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<iproducts[]> {
    return this.http
      .get<iJsonProduct>(this.apiUrl)
      .pipe(map((data) => data.products));
  }

  getProductCart(product: iproducts) {
    this.cart$.next(product);
  }

  getArticoliPreferiti(product: iproducts) {
    // Recupera l'array corrente dei preferiti
    const currentPreferiti = this.preferitiSubject.value;

    // Controlla se il prodotto è già nei preferiti per evitare duplicati
    const existingProduct = currentPreferiti.find(
      (item) => item.id === product.id
    );

    if (!existingProduct) {
      // Aggiunge il nuovo prodotto all'array
      const updatedPreferiti = [...currentPreferiti, product];

      // Aggiorna il BehaviorSubject con il nuovo array
      this.preferitiSubject.next(updatedPreferiti);
    } else {
      alert('Il prodotto è già nei preferiti');
    }
  }
}
