import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import '../util/rxjs-extensions'

import { Offer } from '../shared/offer.model'
import { OffersService } from '../offers.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [OffersService]
})

export class TopComponent implements OnInit {

  public offers: Offer[]
  private observableOffers: Observable<Offer[]>
  private subjectSearch: Subject<string> = new Subject<string>()

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.observableOffers = this.subjectSearch
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap((term: string) => {
      console.log('Fanzendo request http')
      if(term)
        return this.offersService.searchOffer(term)
      return Observable.of<Offer[]>([])
    })
    .catch((error: any) => {
      console.log(error)
      return Observable.of<Offer[]>([])
    })

    this.observableOffers.subscribe((offers: Offer[]) => {
      console.log(offers)
      this.offers = offers
    })
  }

  public search(searchTerm: string): void {
    console.log('Evento keyUp disparado: ', searchTerm)
    this.subjectSearch.next(searchTerm)
  }
}
