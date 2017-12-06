import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Order } from './shared/order.model'

@Injectable()
export class BuyOrderService {

  constructor(private http: Http){}

  public makePurchase(order: Order):void{
    console.log(order)
  }
}
