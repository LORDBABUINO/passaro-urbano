import { Component, OnInit } from '@angular/core';
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

  constructor(private ordemCompraService: BuyOrderService) { }

  ngOnInit() {

  }

  public confirmPurchase(form: NgForm): void{
    console.log(form)
  }
}
