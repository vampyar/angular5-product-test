import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-products-list',
  template: `
    <div class="col-12 col-md-12">
        <div class="row">
            <app-product-item *ngFor="let productItem of products" [item]="productItem"></app-product-item>
        </div>
    </div>
  `,
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: ProductItem[];

  constructor(
     public _productService: ProductsService
  ) {}

  ngOnInit() {
    this.products = this._productService.getList();
  }

}
