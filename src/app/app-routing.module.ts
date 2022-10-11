import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { MakeOrderComponent } from './make-order/make-order.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'make-order', component: MakeOrderComponent},
  { path:'orders-view', component: OrdersViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
