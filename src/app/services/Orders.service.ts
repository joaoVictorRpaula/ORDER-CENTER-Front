import { Orders } from './../models/orders';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  private url = "https://localhost:5001/Orders"

  private receivedOrder = new BehaviorSubject<Orders>({clientName:''});

  public addOrder(order: Orders) : Observable<Orders>{
    return this.httpClient.post<Orders>(this.url, order)
  }

  public setOrderReceived(order:Orders){
    this.receivedOrder.next(order);
  }

  public getOrderReceived():Orders{
    var orderReturn = {clientName:''};
    this.receivedOrder.asObservable().subscribe(order =>{
      orderReturn = order
  })

    return orderReturn;
  }
}
