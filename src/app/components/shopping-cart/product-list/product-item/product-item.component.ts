
import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../../models/product";
import {MessengerService} from "../../../../services/messenger.service";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
}

}
