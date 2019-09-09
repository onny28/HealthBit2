import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaysevenlunchPage } from './daysevenlunch.page';
const routes = [
    {
        path: '',
        component: DaysevenlunchPage
    }
];
let DaysevenlunchPageModule = class DaysevenlunchPageModule {
};
DaysevenlunchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaysevenlunchPage]
    })
], DaysevenlunchPageModule);
export { DaysevenlunchPageModule };
//# sourceMappingURL=daysevenlunch.module.js.map