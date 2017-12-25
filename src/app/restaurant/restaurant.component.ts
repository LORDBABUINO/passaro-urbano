import { Component, OnInit } from '@angular/core'
import { Offer } from '../shared/offer.model'
import { OffersService } from '../offers.service'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [ OffersService ]
})
export class RestaurantComponent implements OnInit {

  public offers: Offer[]

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService.getOffersByCategory('restaurante')
    .then((offers: Offer[]) => {
      this.offers = offers
    })
  }

}
