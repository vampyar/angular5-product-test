import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {ProductItem} from '../product-item/product-item';

@Injectable()
export class CartService {

  private itemsCart = new BehaviorSubject<any>(0);
  items = this.itemsCart.asObservable();

  change(products) {
    this.itemsCart.next(products);
  }

}
