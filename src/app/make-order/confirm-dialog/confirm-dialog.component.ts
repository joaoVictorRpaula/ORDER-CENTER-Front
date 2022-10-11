import { OrdersService } from '../../services/Orders.service';
import { Orders } from '../../models/orders';
import { Component ,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  public confirm(){
    this.router.navigate(["/home"])
  }


}
