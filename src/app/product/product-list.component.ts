import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'
@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage:boolean = false;
    errorMessage: string;
    private _listFilter: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [];

    constructor(private productService: ProductService){
    }

    onRatingClicked(message: string): void{
        this.pageTitle = "product List: " + message;
    }

    performFilter(filteredBy: string): IProduct[]{
        filteredBy = filteredBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => {
            return product.productName.toLocaleLowerCase().indexOf(filteredBy) !== -1;
        });
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }
}