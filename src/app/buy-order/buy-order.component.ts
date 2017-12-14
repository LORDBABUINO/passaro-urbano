import { Component, OnInit } from '@angular/core';
import { BuyOrderService } from '../buy-order.service'
import { Order } from '../shared/order.model'

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css'],
  providers: [ BuyOrderService ]
})
export class BuyOrderComponent implements OnInit {

  public idBuyOrder: number

  public order: Order = new Order('','','','')
  public address: string = ''
  public number: string = ''
  public complement: string = ''
  public formPayment: string = ''

  constructor(private buyOrderService: BuyOrderService) { }

  ngOnInit() {
  }

  public updateAddress(address: string): void{
    this.address = address
  }

  public updateNumber(number: string): void{
    this.number = number
  }

  public updateComplement(complement: string): void{
    this.complement = complement
  }

  public updateFormPayment(formPayment: string): void{
    this.formPayment = formPayment
  }

  public confirmPurchase(): void{
    this.order.address = this.address
    this.order.number = this.number
    this.order.complement = this.complement
    this.order.formPayment = this.formPayment
    this.buyOrderService.makePurchase(this.order)
      .subscribe((idOrder: number) => {
        this.idBuyOrder = idOrder
      })
  }
}
