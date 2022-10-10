import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { Router } from '@angular/router';
import { ProductItem } from "../../models/ProductItem";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCartList: ProductItem[] = []
  name: string = ''
  address: string = ''
  creditCard: string = ''
  totalPrice: number = 0
  emptyCartImagePath: string = "../../../assets/EmptyCart.png"

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingCartList = this.cartService.getCartItems()
    this.calculateTotalPrice()
  }

  clearShoppingCart(): void {
    this.cartService.clearCart()
    this.shoppingCartList = []
  }

  onSubmit(): void {
    this.setName(this.name)
    this.calculateTotalPrice()
    this.router.navigate(['confirmation'])
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.cartService.calculateTotalPrice()
  }

  onQuantityChange(): void {
    alert('Shopping cart updated')
    this.calculateTotalPrice()
  }

  removeFromShoppingCart(productItem: ProductItem) {
    this.cartService.removeFromCart(productItem)
    this.calculateTotalPrice()
    alert(`${productItem.product.name} was removed from cart`)
  }

  getName(): string {
    return this.name
  }

  setName(fullName: string): void {
    this.name = fullName
    this.cartService.setName(fullName)
  }
}
