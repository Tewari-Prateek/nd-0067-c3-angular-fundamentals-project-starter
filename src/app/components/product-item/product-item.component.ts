import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from "../../models/Products";
import { ProductItem } from "../../models/ProductItem";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Products
  @Output() addFromProducts = new EventEmitter()

  quantity: number

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: -1,
      url: '',
      description: '',
      quantity: 0
    }
    this.quantity = 1
  }

  ngOnInit(): void {
  }

  onProductAdd(product: Products) {
    this.addFromProducts.emit(new ProductItem(product, this.quantity))
  }
}
