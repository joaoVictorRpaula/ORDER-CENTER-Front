import { ConfirmDialogComponent } from './make-order/confirm-dialog/confirm-dialog.component';
import { Orders_ItensService } from './services/Orders_Itens.service';
import { OrdersService } from './services/Orders.service';
import { FoodsService } from './services/Foods.service';
import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './home/user-form/user-form.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MaterialModule } from 'src/material.module';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TempOrdersService} from './services/tempOrders.service';
import { OrderSignalRService } from './services/OrderSignalR.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MakeOrderComponent,
    OrdersViewComponent,
    UserFormComponent,
    ConfirmDialogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  providers: [FoodsService, OrdersService, Orders_ItensService, TempOrdersService, OrderSignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
