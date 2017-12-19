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

  public idBuyOrder: number

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
    if(this.form.status === 'INVALID'){
      this.form.get('address').markAsTouched()
      this.form.get('number').markAsTouched()
      this.form.get('complement').markAsTouched()
      this.form.get('formPayment').markAsTouched()
    } else {

      let order = new Order(
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
}
