import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponse, Category } from '../interface/product.interface';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; 
  constructor(private http: HttpClient) { }

  getProductsByCategory(category: Category): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/category/${category}`);
  }
}
