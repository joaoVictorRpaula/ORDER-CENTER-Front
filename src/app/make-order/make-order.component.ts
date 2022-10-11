import { OrderSignalRService } from './../services/OrderSignalR.service';
import { TempOrders } from './../models/tempOrders';
import { TempOrdersService } from '../services/tempOrders.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { OrdersService } from './../services/Orders.service';
import { FoodsService } from './../services/Foods.service';
import { Orders_ItensService } from './../services/Orders_Itens.service';
import { Orders_itens } from './../models/orders_itens';
import { Component, OnInit } from '@angular/core';
import { Foods } from '../models/foods';
import { Orders } from '../models/orders';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss']
})
export class MakeOrderComponent implements OnInit {

  public itensExist = true
  public foods?: Foods[];
  public selectedFood: any[] = [];

  constructor(
    private foodService : FoodsService,
    private ordersService : OrdersService,
    private orderItensService : Orders_ItensService,
    private dialog : MatDialog,
    private tempOrdersService : TempOrdersService,
    private orderSignalrService : OrderSignalRService
    ) {
      this.orderSignalrService.startConnection();
    }

    private order : Orders = {clientName:''};
    public orderItens: Orders_itens[] = [];
    private orderId = 0;
    private tempOrders : TempOrders[] = [] ;

  ngOnInit() {
    this.getFoods();
    this.order = this.ordersService.getOrderReceived();
  }

  public confirmOrder(orderItens:Orders_itens[]){
    this.ordersService.addOrder(this.order).subscribe(o=>
      {
        this.orderId = o.idOrder;
        this.orderItensService.setOrderItens(orderItens , this.orderId)
        this.orderItensService.addOrderItens().subscribe(oI =>{
          oI.forEach(o=>{
            this.tempOrders.push({orders_ItensId:o.id})
          })
          this.tempOrdersService.addTempOrders(this.tempOrders).subscribe(o=>{
            this.orderSignalrService.sendNewOrder()
          })
        })
        this.openConfirmDialog();
      });
  }


  public addFood(food: Foods){
    var itenExists = false
    //Verifica se o item ja foi inserido
    this.orderItens.forEach(i =>{
      if(i.food?.idFood == food.idFood){
        i.quantity += 1;
        itenExists = true;
      }
    })
    //caso não, ele adiciona com quantidade 1
    if(!itenExists){
      this.orderItens?.push({
        foodId:food.idFood,
        quantity:1,
        food:food,
        orders:this.order
      })
    }
  }


  public getFoods() {
    this.foodService.getAllFoods().subscribe((foods =>{
      this.foods = foods;
    }));
  }

  public openConfirmDialog(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      width: '400px'
    })
  }

}
