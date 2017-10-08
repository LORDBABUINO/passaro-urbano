import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Offer } from '../shared/offer.model'
import { OffersService } from '../offers.service'

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersService]
})
export class OfferComponent implements OnInit {

  public offer: Offer

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.offersService.getOffersById(params.id)
      .then((offer: Offer) => {
        this.offer = offer
      })
    })
  }
}
