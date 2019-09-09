import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaytwobreakfastPage } from './daytwobreakfast.page';
const routes = [
    {
        path: '',
        component: DaytwobreakfastPage
    }
];
let DaytwobreakfastPageModule = class DaytwobreakfastPageModule {
};
DaytwobreakfastPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaytwobreakfastPage]
    })
], DaytwobreakfastPageModule);
export { DaytwobreakfastPageModule };
//# sourceMappingURL=daytwobreakfast.module.js.map