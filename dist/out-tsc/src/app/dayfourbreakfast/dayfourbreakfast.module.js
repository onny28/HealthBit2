import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayfourbreakfastPage } from './dayfourbreakfast.page';
const routes = [
    {
        path: '',
        component: DayfourbreakfastPage
    }
];
let DayfourbreakfastPageModule = class DayfourbreakfastPageModule {
};
DayfourbreakfastPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayfourbreakfastPage]
    })
], DayfourbreakfastPageModule);
export { DayfourbreakfastPageModule };
//# sourceMappingURL=dayfourbreakfast.module.js.map