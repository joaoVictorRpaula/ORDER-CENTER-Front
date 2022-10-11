import { OrdersService } from './../../services/Orders.service';
import { Orders } from './../../models/orders';
import { Component ,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    private router: Router,
    public dialog : MatDialog,
    public ordersService : OrdersService
  ) {
  }

  public order: Orders = {clientName:''}
  public name = '';

  ngOnInit() {
  }

  cancel(): void{
    this.dialogRef.close();
  }

  public confirmName(name: string){
    this.order = {
      clientName:name,
    }
    this.ordersService.setOrderReceived(this.order);
    this.router.navigate(["/make-order"])
  }


}
