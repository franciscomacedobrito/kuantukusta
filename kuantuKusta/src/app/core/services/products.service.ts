import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get('https://5ee744ce52bb0500161fd6e4.mockapi.io/products');
  }
}
