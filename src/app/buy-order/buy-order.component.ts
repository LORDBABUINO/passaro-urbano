import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { BuyOrderService } from '../buy-order.service'
import { Order } from '../shared/order.model'

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css'],
  providers: [ BuyOrderService ]
})
export class BuyOrderComponent implements OnInit {

  @ViewChild('form') public form: NgForm

  public idBuyOrder:number

  constructor(private buyOrderService: BuyOrderService) { }

  ngOnInit() {

  }

  public confirmPurchase(): void{

    let order: Order = new Order(
      this.form.value.address,
      this.form.value.number,
      this.form.value.complement,
      this.form.value.formPayment
    )

    this.buyOrderService.makePurchase(order)
      .subscribe((idOrder: number) => {
        this.idBuyOrder = idOrder
      })
  }
}
