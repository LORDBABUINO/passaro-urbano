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

    let itemFound = this.cart.find((item: ItemCart) => item.id === itemCart.id)

    if(itemFound){
      itemFound.amount++
    } else {
      this.cart.push(itemCart)
    }
  }

  public calculateTotal(): number {

    let total: number = 0

    this.cart.map((item: ItemCart) => {
      total = total + item.valor * item.amount
    })

    return total
  }

  public addAmount(item: ItemCart): void{

    let itemFound = this.cart.find((itemCart: ItemCart) => item.id === itemCart.id)

    itemFound.amount++
  }

  public subtractAmount(item: ItemCart): void{

    let itemFound = this.cart.find((itemCart: ItemCart) => item.id === itemCart.id)

    if(itemFound.amount >= 1)
      itemFound.amount--
  }

  public delete(item: ItemCart): void {}
  public change(item: ItemCart): void {}
}
