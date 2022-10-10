import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Products } from "../../models/Products";
import { HttpService } from "../../services/http.service";
import { CartService } from "../../services/cart.service";
import { ProductItem } from "../../models/ProductItem";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  id: number = 0
  product: Products
  quantity: number = 1

  constructor(private httpService: HttpService, private cartService: CartService, private router: Router, private activeRouter: ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'))
    })
    this.product = {
      id: 0,
      name: '',
      price: -1,
      url: '',
      description: '',
      quantity: 0
    }
  }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => {
      let products: Products[] = data
      this.product = products.find(p => {
        return p.id === this.id
      }) as Products
    }
    )
  }

  addToShoppingCart(product: Products): void {
    this.cartService.addToCart(new ProductItem(product, this.quantity))
    alert(`${this.quantity} ${this.quantity === 1 ? (product.name + ' is') : (product.name + 's are')} added to the cart`)
  }

}
