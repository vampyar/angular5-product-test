import { Injectable } from '@angular/core';
import { PRODUCT_ITEMS } from './product.face';
import { ProductItem } from './product-item/product-item';

@Injectable()
export class ProductsService {

    /**
     * Get list all products
     * @returns {ProductItem[]}
     */
    getList() {
        return PRODUCT_ITEMS;
    }

    /**
     * Get one product
     * @param id
     * @returns {number|ProductItem}
     */
    get({id}: any) {
        const products = PRODUCT_ITEMS
            .filter((product: ProductItem) => {
                if (product.id === +id) {
                    return product;
                }
            });
        return products.length && products[0];
    }
}
