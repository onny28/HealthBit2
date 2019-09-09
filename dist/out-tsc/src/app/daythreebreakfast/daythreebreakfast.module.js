import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaythreebreakfastPage } from './daythreebreakfast.page';
const routes = [
    {
        path: '',
        component: DaythreebreakfastPage
    }
];
let DaythreebreakfastPageModule = class DaythreebreakfastPageModule {
};
DaythreebreakfastPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaythreebreakfastPage]
    })
], DaythreebreakfastPageModule);
export { DaythreebreakfastPageModule };
//# sourceMappingURL=daythreebreakfast.module.js.map