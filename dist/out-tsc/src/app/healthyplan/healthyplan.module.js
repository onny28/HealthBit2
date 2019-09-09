import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HealthyplanPage } from './healthyplan.page';
const routes = [
    {
        path: '',
        component: HealthyplanPage
    }
];
let HealthyplanPageModule = class HealthyplanPageModule {
};
HealthyplanPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [HealthyplanPage]
    })
], HealthyplanPageModule);
export { HealthyplanPageModule };
//# sourceMappingURL=healthyplan.module.js.map