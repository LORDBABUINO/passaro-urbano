import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
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
    'address': new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120)
    ]),
    'number': new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20)
    ]),
    'complement': new FormControl(null),
    'formPayment': new FormControl(null, [Validators.required])
  })

  constructor(private buyOrderService: BuyOrderService) { }

  ngOnInit() {

  }

  public confirmPurchase(): void {
    console.log(this.form)
  }
}
