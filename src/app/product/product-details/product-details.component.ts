import { Component, OnInit } from '@angular/core';
import { IProduct } from './../product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product Details';
  product:IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
