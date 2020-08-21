import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IProduct } from './../product';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product Details';
  product:IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ": " + id;
    this.product = {
      'productId': id,
      'productName': 'the name',
      'productCode': 'dsa',
      'description': 'dsadfsa',
      'imageUrl': 'assets/images/leaf_rake.png',
      'price': 19.95,
      'starRating': 3.2,
      'releaseDate': 'asdsadfs'
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
