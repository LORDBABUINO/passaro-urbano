import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css']
})
export class BuyOrderComponent implements OnInit {

  public address: string = ''
  public number: number
  public complement: string = ''
  public formPayment: string = ''

  constructor() { }

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
