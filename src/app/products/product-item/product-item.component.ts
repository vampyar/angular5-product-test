import {Component, Input, OnInit} from '@angular/core';
import {ProductItem} from './product-item';

@Component({
    selector: 'app-product-item',
    template: `
        <div class="col-12 col-lg-12">
            <h2>{{product.name}}</h2>
            <p>Price: {{product.price}}</p>
            <div>
                <a class="btn btn-secondary pull-left" routerLink="/products/{{product.id}}" role="button">Details</a>
                <app-add-to-cart [item]="product"></app-add-to-cart>
            </div>
        </div>
    `,
    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

    @Input('item') product: ProductItem;

    constructor() {
    }

    ngOnInit() {
    }

}
