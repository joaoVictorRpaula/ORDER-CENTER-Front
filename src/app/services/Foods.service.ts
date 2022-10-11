import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foods } from '../models/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

constructor(private httpClient: HttpClient) { }

private url = "https://localhost:5001/Foods"

public getAllFoods(): Observable<Foods[]>{
  return this.httpClient.get<Foods[]>(this.url);
}


}
