import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { BuyOrderService } from '../buy-order.service'
import { Order } from '../shared/order.model'

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css'],
  providers: [ BuyOrderService ]
})
export class BuyOrderComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    'address': new FormControl(null),
    'number': new FormControl(null),
    'complement': new FormControl(null),
    'formPayment': new FormControl(null)
  })

  constructor(private buyOrderService: BuyOrderService) { }

  ngOnInit() {

  }

  public confirmPurchase(): void {
  }
}
