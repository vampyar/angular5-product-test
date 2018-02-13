import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { LocalStorage } from '../../providers/http/token.decorator';

@Component({
    selector: 'app-cart',
    template: `
        <h6 class="text-white">Cart <span class="badge badge-default">{{products.length}}</span></h6>
    `,
    styles: []
})
export class CartComponent implements OnInit {

    @LocalStorage
    private storage: any;
    private products = [];

    constructor(private _cart: CartService) {
    }

    ngOnInit() {
        if (this.storage)
            this.products = this.storage;

        this._cart.items.subscribe((res) => {
            if (res) {
                this.products.push(res);
                this.storage = this.products;
            }
        });
    }

}
