import {Component, OnInit} from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service'
import {Product} from 'src/app/models/product';


// @ts-ignore
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;
  private product!: Product;

  constructor(private msg: MessengerService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      // @ts-ignore
      if (this.cartItems[i].productId === product.id) {
        // @ts-ignore
        this.cartItems[i].qty++
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        // @ts-ignore
        productId: product.id,
        // @ts-ignore
        productName: product.name,
        // @ts-ignore
        qty: 1,
        // @ts-ignore
        price: product.price
      })
    }


    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item["qty"] * item["price"])
    })
  }

}
