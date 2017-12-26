import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { CartService } from './cart.service'

import { ROUTES } from './app.routes'

import { ShortDescription } from './util/short-description.pipe';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { FunComponent } from './fun/fun.component';
import { OfferComponent } from './offer/offer.component';
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component';
import { WhereComponent } from './offer/where/where.component';

import { BuyOrderComponent } from './buy-order/buy-order.component';
import { BuyOrderSuccessComponent } from './buy-order-success/buy-order-success.component'

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HomeComponent,
    FooterComponent,
    RestaurantComponent,
    FunComponent,
    OfferComponent,
    HowToUseComponent,
    WhereComponent,
    ShortDescription,
    BuyOrderComponent,
    BuyOrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CartService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
