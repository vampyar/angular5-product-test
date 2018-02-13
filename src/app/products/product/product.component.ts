import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductItem} from '../product-item/product-item';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product',
  template: `
    <div class="container">
        <h1>{{product.name}}</h1>
        <span class="form-control">Description: {{product.description}}</span>
        <span class="form-control">Price: {{product.price}}</span>
        <app-add-to-cart [item]="product"></app-add-to-cart>
    </div>
  `,
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductItem;

  constructor(
     private route: ActivatedRoute,
     private _products: ProductsService
  ) {
    this.route.params.subscribe((params: object) => {
      this.product = this._products.get(
          params
      );
    });
  }

  ngOnInit() {

  }

}
