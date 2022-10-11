import { Observable } from 'rxjs';
import { TempOrders } from '../models/tempOrders';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempOrdersService {

constructor(private httpClient : HttpClient) { }
private url = "https://localhost:5001/TempOrders";


public addTempOrders(tempOrders : TempOrders[]): Observable<TempOrders[]>{
  return this.httpClient.post<TempOrders[]>(this.url, tempOrders);
}

public getAllTempOrders(): Observable<TempOrders[]>{
  return this.httpClient.get<TempOrders[]>(this.url);
}

public removeTempOrder(tempOrderId : Number){
  const endPoint = this.url + "/" + tempOrderId;
  return this.httpClient.delete<TempOrders>(endPoint);
}


}
