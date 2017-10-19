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

  public validAddress: boolean = false
  public validNumber: boolean = false
  public validComplement: boolean
  public validFormPayment: boolean = false

  public pristineAddress: boolean = true
  public pristineNumber: boolean = true
  public pristineComplement: boolean = true
  public pristineFormPayment: boolean = true

  constructor() { }

  ngOnInit() {
  }

  public updateAddress(address: string): void{
    this.address = address
    this.pristineAddress = false

    if(this.address.length > 3)
      this.validAddress = true
    else
      this.validAddress = false
  }

  public updateFormNumber(number: number): void{
    this.number = number
    this.pristineNumber = false

    if(this.number >= 0)
      this.validNumber = true
    else
      this.validNumber = false
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
  }
}
