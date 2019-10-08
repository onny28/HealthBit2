import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let CartService = class CartService {
    constructor() {
        this.items = [];
    }
    addToCart(ingredients) {
        this.items.push(ingredients);
    }
    getItems() {
        return this.items;
    }
    clearCart() {
        this.items = [];
        return this.items;
    }
};
CartService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map