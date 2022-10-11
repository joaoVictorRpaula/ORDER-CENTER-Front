import { TempOrders } from './../models/tempOrders';
import { OrderSignalRService } from './../services/OrderSignalR.service';
import { Component, OnInit } from '@angular/core';
import { TempOrdersService } from '../services/tempOrders.service';

@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.scss']
})
export class OrdersViewComponent implements OnInit {

  public tempOrders : TempOrders[] = [];
  public similarTempOrders : any[] = [];

  constructor(
    private orderSignalr : OrderSignalRService,
    private tempOrdersService : TempOrdersService
  ) {
    this.orderSignalr.startConnection();
    this.orderSignalr.connection.on("newOrder", ()=>{
      this.getAllTempOrders();
    })
  }


  ngOnInit(): void {
    this.getAllTempOrders();
  }

  public getAllTempOrders(){
    this.tempOrdersService.getAllTempOrders().subscribe(tO =>{
      this.similarTempOrders = [];
      this.tempOrders = tO;
      this.setSimilarTempOrders(tO);
    });
  }

  public setSimilarTempOrders(tempOrders : TempOrders[]){
    var result = tempOrders.reduce((r, a) =>{
      (r[a.orders_Itens?.orderId] = r[a.orders_Itens?.orderId] || []).push(a);
      return r;
    }, Object.create(null));
    for(let k in result){
      this.similarTempOrders.push(result[k]);
    }
  }


  public removeTempOrder(tempOrders : TempOrders[]){
    tempOrders.forEach(tO=> {
      this.tempOrdersService.removeTempOrder(tO.id!).subscribe(s =>{
        this.orderSignalr.sendNewOrder();
      });
    });

  }


}
