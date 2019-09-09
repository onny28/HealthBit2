import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayfivelunchPage } from './dayfivelunch.page';
const routes = [
    {
        path: '',
        component: DayfivelunchPage
    }
];
let DayfivelunchPageModule = class DayfivelunchPageModule {
};
DayfivelunchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayfivelunchPage]
    })
], DayfivelunchPageModule);
export { DayfivelunchPageModule };
//# sourceMappingURL=dayfivelunch.module.js.map