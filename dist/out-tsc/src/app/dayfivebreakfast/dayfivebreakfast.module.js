import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayfivebreakfastPage } from './dayfivebreakfast.page';
const routes = [
    {
        path: '',
        component: DayfivebreakfastPage
    }
];
let DayfivebreakfastPageModule = class DayfivebreakfastPageModule {
};
DayfivebreakfastPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayfivebreakfastPage]
    })
], DayfivebreakfastPageModule);
export { DayfivebreakfastPageModule };
//# sourceMappingURL=dayfivebreakfast.module.js.map