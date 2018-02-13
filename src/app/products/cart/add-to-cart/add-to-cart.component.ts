import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ProductItem } from '../../product-item/product-item';
import {CartService} from '../cart.service';

@Component({
    selector: 'app-add-to-cart',
    template: `
        <button class="btn btn-success pull-right" (click)="handleAddToCart(product)">Add to Cart</button>
    `,
    styles: []
})
export class AddToCartComponent implements OnInit {

    @Input('item') product: ProductItem;


    constructor(
        private _cart: CartService
    ) {}

    ngOnInit() {
    }

    handleAddToCart(product) {
        this._cart.change(product);
    }

}
