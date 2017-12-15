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

  public validAddress: boolean = false
  public validNumber: boolean = false
  public validComplement: boolean = false
  public validFormPayment: boolean = false

  public pristineAddress: boolean = true
  public pristineNumber: boolean = true
  public pristineComplement: boolean = true
  public pristineFormPayment: boolean = true

  public formStatus: boolean = false

  constructor(private buyOrderService: BuyOrderService) { }

  ngOnInit() {
  }

  public updateAddress(address: string): void{
    this.address = address
    this.pristineAddress = false

    if(this.address.length > 3)
      this.validAddress = true
    else
      this.validAddress = false

    this.enableForm()
  }

  public updateNumber(number: string): void{
    this.number = number
    this.pristineNumber = false

    if(this.number.length >= 0)
      this.validNumber = true
    else
      this.validNumber = false

    this.enableForm()
  }

  public updateComplement(complement: string): void{
    this.complement = complement
    this.pristineComplement = false

    if(this.complement.length >= 1)
      this.validComplement = true
  }

  public updateFormPayment(formPayment: string): void{
    this.formPayment = formPayment
    this.pristineFormPayment = false

    if(this.formPayment.length > 0)
      this.validFormPayment = true
    else
      this.validFormPayment = false

    this.enableForm()
  }

  public enableForm(): void {
    if(this.validAddress && this.validNumber && this.validFormPayment){
      this.formStatus = true
    }
    else {
      this.formStatus = false
    }
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
