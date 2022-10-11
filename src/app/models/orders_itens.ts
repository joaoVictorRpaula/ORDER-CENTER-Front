import { Orders } from './orders';
import { Foods } from './foods';
export interface Orders_itens {
  id?: any;
  orderId?: any;
  foodId: any;
  quantity: any;
  food: Foods | null;
  orders: Orders | null;
}
