import { Component, OnInit } from '@angular/core';
import { Offer } from '../shared/offer.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
  providers: [OffersService]
})
export class FunComponent implements OnInit {

  public offers: Offer[]

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffersByCategory('diversao')
    .then((offers: Offer[]) => {
      this.offers = offers
    })
  }

}
