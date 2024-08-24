/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from './order-item.model';

@Injectable({
  providedIn: 'root'
})
export class paymentService {
  private apiUrl = '/api/orders'; // נניח שזה ה-API שלך

  constructor(private http: HttpClient) {}

  getOrderItems(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(`${this.apiUrl}/items`);
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost:8080/api/orders';

  constructor(private http: HttpClient) { }

  getOrderDetails(orderId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${orderId}`);
  }
}