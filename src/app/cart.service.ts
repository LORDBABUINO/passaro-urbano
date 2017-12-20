import { ItemCart } from './shared/item-cart.model'
import { Offer } from './shared/offer.model'

export class CartService {

  public cart: ItemCart[] = []

  public list(): ItemCart[] {
    return this.cart
  }

  public add(offer: Offer): void {

    let itemCart: ItemCart = new ItemCart(
      offer.id,
      offer.images[0],
      offer.title,
      offer.offerDescription,
      offer.valor,
      1
    )

    this.cart.push(itemCart)
  }

  public delete(item: ItemCart): void {}
  public change(item: ItemCart): void {}
}
