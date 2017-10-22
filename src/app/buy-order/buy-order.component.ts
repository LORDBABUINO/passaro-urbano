import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-order',
  templateUrl: './buy-order.component.html',
  styleUrls: ['./buy-order.component.css']
})
export class BuyOrderComponent implements OnInit {

  public address: string = ''
  public number: number = 0
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

  public formStatus: boolean = true

  constructor() { }

  ngOnInit() {
  }

  public updateAddress(address: string): void{
    this.address = address
    this.pristineAddress = false

    this.enableForm()

    if(this.address.length > 3)
      this.validAddress = true
    else
      this.validAddress = false
  }

  public updateNumber(number: number): void{
    this.number = number
    this.pristineNumber = false

    this.enableForm()

    if(this.number > 0)
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

    this.enableForm()

    if(this.formPayment.length > 0)
      this.validFormPayment = true
    else
      this.validFormPayment = false
  }

  public enableForm(): void {
    if(this.validAddress && this.validNumber && this.validFormPayment)
      this.formStatus = false
    else
      this.formStatus = true
  }
}
