import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/Products'
import { HttpService } from "../../services/http.service";
import { CartService } from "../../services/cart.service";
import { ProductItem } from "../../models/ProductItem";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Products[] = []

  constructor(private httpService: HttpService, private cartService: CartService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      this.products = data
    }
    )
  }

  addToCart(productItem: ProductItem): void {

    this.cartService.addToCart(productItem)
    alert(`${productItem.quantity} ${productItem.quantity === 1 ? (productItem.product.name + ' is') : (productItem.product.name + 's are')} added to the cart`)

  }

}
