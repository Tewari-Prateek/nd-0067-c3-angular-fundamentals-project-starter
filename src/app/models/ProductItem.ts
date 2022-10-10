import { Products } from "./Products";

export class ProductItem {
  product: Products
  quantity: number

  constructor(product: Products, quantity: number) {
    this.product = product
    this.quantity = quantity
  }
}


