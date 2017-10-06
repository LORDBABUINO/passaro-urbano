import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Offer } from './shared/offer.model'
import { URL_API } from './app.api'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'

@Injectable()
export class OffersService {


  constructor(private http: Http){}

  public getOffers (): Promise<Offer[]> {
    return this.http.get(`${URL_API}/ofertas?featured=true`)
    .toPromise()
    .then((response: Response) => response.json())
  }

  public getOffersByCategory (category: string): Promise<Offer[]>{
    return this.http.get(`${URL_API}/ofertas?category=${category}`)
    .toPromise()
    .then((response: Response) => response.json());
  }

  public getOffersById (id: number): Promise<Offer> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
    .toPromise()
    .then((response: Response) => response.json()[0])
  }

  public getHowToUseById (id: number): Promise<string> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
    .toPromise()
    .then((response: Response) => response.json()[0].descricao)
  }

  public getWhereById (id: number): Promise<string> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
    .toPromise()
    .then((response: Response) => response.json()[0].descricao)
  }

  public searchOffer(term: string): Observable<Offer[]>{
    return this.http.get(`${URL_API}/ofertas?offerDescription_like=${term}`)
    .retry(10)
    .map((response: Response) => response.json())
  }
}
