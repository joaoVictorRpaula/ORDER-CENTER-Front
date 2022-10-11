import { Orders_itens } from './../models/orders_itens';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Orders_ItensService {

constructor(private httpClient : HttpClient) { }

private url = "https://localhost:5001/Orders_Itens"
private receivedOrderItens = new BehaviorSubject<Orders_itens[]>([]);
private receivedOrderItensList : Orders_itens[] = []

public addOrderItens() : Observable<Orders_itens[]>{
  this.transformBehaviorSubjectInList()
  return this.httpClient.post<Orders_itens[]>(this.url, this.receivedOrderItensList);
}

public  transformBehaviorSubjectInList(){
  this.receivedOrderItens.subscribe(itens =>{
    this.receivedOrderItensList = itens
  })
}

public setOrderItens(orderItens: Orders_itens[], orderId : number){
    orderItens.forEach(i => {
      i.orderId = orderId
      i.food = null,
      i.orders = null
    })
    this.receivedOrderItens.next(orderItens);
}

public getOrderItensReceived():Orders_itens[]{
  var orderItensReceived: Orders_itens[] = []
  this.receivedOrderItens.asObservable().subscribe(orderItens => {
    orderItensReceived = orderItens
  })

  return orderItensReceived;
}

}
