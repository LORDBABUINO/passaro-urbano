import { ItemCart } from './item-cart.model'

export class Order {
  constructor(
    public items: ItemCart[],
    public address: string,
    public number: string,
    public complement: string,
    public formPayment: string
  ){}
}
