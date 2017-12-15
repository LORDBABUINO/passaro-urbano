import { Component, OnInit } from '@angular/core';
import { BuyOrderService } from '../buy-order.service'
import { Order } from '../shared/order.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ BuyOrderService ]
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: BuyOrderService) { }

  ngOnInit() {

  }
}
