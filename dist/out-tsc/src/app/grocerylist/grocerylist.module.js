import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GrocerylistPage } from './grocerylist.page';
const routes = [
    {
        path: '',
        component: GrocerylistPage
    }
];
let GrocerylistPageModule = class GrocerylistPageModule {
};
GrocerylistPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [GrocerylistPage]
    })
], GrocerylistPageModule);
export { GrocerylistPageModule };
//# sourceMappingURL=grocerylist.module.js.map