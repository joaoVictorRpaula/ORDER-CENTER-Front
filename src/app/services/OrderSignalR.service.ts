import { Injectable } from '@angular/core';
import * as signalr from '@microsoft/signalr';


@Injectable()
export class OrderSignalRService {

constructor() { }
public connection = new signalr.HubConnectionBuilder().withUrl("https://localhost:5001/newOrder").build();

public startConnection(){
  return this.connection.start()
}

public sendNewOrder(){
  this.connection.send("newOrder")
}

}
