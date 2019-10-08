import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
let GrocerylistPage = class GrocerylistPage {
    constructor(cartService) {
        this.cartService = cartService;
        this.items = this.cartService.getItems();
    }
    ngOnInit() {
    }
};
GrocerylistPage = tslib_1.__decorate([
    Component({
        selector: 'app-grocerylist',
        templateUrl: './grocerylist.page.html',
        styleUrls: ['./grocerylist.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CartService])
], GrocerylistPage);
export { GrocerylistPage };
//# sourceMappingURL=grocerylist.page.js.map