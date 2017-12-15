import { Injectable } from '@angular/core'
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { URL_API } from './app.api'

import { Order } from './shared/order.model'

@Injectable()
export class BuyOrderService {

  constructor(private http: Http){}

  public makePurchase(order: Order): Observable<number>{

    let headers: Headers = new Headers()

    headers.append('Content-type', 'application/json')

    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(order),
      new RequestOptions({ headers: headers })
    )
    .map((response: Response) => response.json().id)
  }
}
