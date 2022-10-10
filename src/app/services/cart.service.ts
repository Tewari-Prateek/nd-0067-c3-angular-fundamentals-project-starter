import { Injectable } from '@angular/core';
import { ProductItem } from "../models/ProductItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productItemList: ProductItem[] = []
  name: string

  constructor() {
    this.name = ''
  }

  getCartItems() {
    return this.productItemList
  }

  addToCart(productItem: ProductItem) {
    let index = this.productItemList.findIndex(p => p.product.name === productItem.product.name)
    if (index === -1) {
      this.productItemList.push(productItem)
    } else {
      this.productItemList.splice(index, 1)
      this.productItemList.push(productItem)
    }
    return this.productItemList
  }

  removeFromCart(productItem: ProductItem) {
    let index = this.productItemList.findIndex(p => p.product.name === productItem.product.name)
    if (index > -1) {
      this.productItemList.splice(index, 1)
    }
    return this.productItemList
  }

  clearCart() {
    this.productItemList = []
    return this.productItemList
  }

  calculateTotalPrice(): number {
    this.removeFromCartIfZero()
    const total = this.productItemList.reduce((acc: number, item: ProductItem) => acc + (item.product.price * item.quantity), 0)
    return total
  }

  private removeFromCartIfZero() {
    this.productItemList.forEach(item => {
      if (item.quantity === 0) {
        this.removeFromCart(item)
      }
    })
  }

  setName(Name: string): void {
    this.name = Name
  }

  getName(): string {
    return this.name
  }

}
