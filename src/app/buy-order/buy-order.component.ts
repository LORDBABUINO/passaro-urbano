import { Component, OnInit } from '@angular/core';
import { BuyOrderService } from '../buy-order.service'

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css'],
  providers: [ BuyOrderService ]
})
export class BuyOrderComponent implements OnInit {

  public address: string = ''
  public number: number
  public complement: string = ''
  public formPayment: string = ''

  constructor(private buyOrderService: BuyOrderService) { }

  ngOnInit() {
  }

  public updateAddress(address: string): void{
    this.address = address
  }

  public updateFormNumber(number: number): void{
    this.number = number
  }

  public updateComplement(complement: string): void{
    this.complement = complement
  }

  public updateFormPayment(formPayment: string): void{
    this.formPayment = formPayment
  }
}
