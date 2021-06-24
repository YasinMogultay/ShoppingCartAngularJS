import { Injectable } from '@angular/core';
//include product class
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1,'Product 1', 'This is the product 1',100, 'https://i5.walmartimages.com/asr/86ac4beb-e601-4eb1-a526-550592eaafa7_1.660c11a37444d497129695352b40b2a2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'),
    new Product(2,'Product 2', 'This is the product 2',50, 'https://i5.walmartimages.com/asr/86ac4beb-e601-4eb1-a526-550592eaafa7_1.660c11a37444d497129695352b40b2a2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'),
    new Product(3,'Product 3', 'This is the product 3',120, 'https://i5.walmartimages.com/asr/86ac4beb-e601-4eb1-a526-550592eaafa7_1.660c11a37444d497129695352b40b2a2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'),
    new Product(4,'Product 4', 'This is the product 4',800, 'https://i5.walmartimages.com/asr/86ac4beb-e601-4eb1-a526-550592eaafa7_1.660c11a37444d497129695352b40b2a2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'),
    new Product(5,'Product 5', 'This is the product 5',120, 'https://i5.walmartimages.com/asr/86ac4beb-e601-4eb1-a526-550592eaafa7_1.660c11a37444d497129695352b40b2a2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'),
    new Product(6,'Product 6', 'This is the product 6',50, 'https://i5.walmartimages.com/asr/86ac4beb-e601-4eb1-a526-550592eaafa7_1.660c11a37444d497129695352b40b2a2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'),
  ]

  constructor() { }


  getProducts(): Product[] {
    //TODO:Populate products from an API and return an Observable
    return this.products
  }

}
