import { Order } from './shared/order.model'

export class BuyOrderService {
  public makePurchase(order: Order):void{
    console.log(order)
  }
}
