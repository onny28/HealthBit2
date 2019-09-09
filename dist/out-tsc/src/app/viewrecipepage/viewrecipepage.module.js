import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewrecipepagePage } from './viewrecipepage.page';
const routes = [
    {
        path: '',
        component: ViewrecipepagePage
    }
];
let ViewrecipepagePageModule = class ViewrecipepagePageModule {
};
ViewrecipepagePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ViewrecipepagePage]
    })
], ViewrecipepagePageModule);
export { ViewrecipepagePageModule };
//# sourceMappingURL=viewrecipepage.module.js.map