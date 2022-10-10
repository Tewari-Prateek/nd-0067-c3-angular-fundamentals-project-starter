import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  name: string = ''
  totalPrice: number = 0

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.totalPrice = this.cartService.calculateTotalPrice()
    this.name = this.cartService.getName()
  }

}
