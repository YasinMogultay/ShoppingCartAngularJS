import { Component, OnInit } from '@angular/core';
//Dependency injection
import{ProductService} from "src/app/services/product.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []

  //dependency injection
  constructor(private  productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) =>{
      this.productList = products;
    });
  }

}
