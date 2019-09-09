import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaysevenPage } from './dayseven.page';
const routes = [
    {
        path: '',
        component: DaysevenPage
    }
];
let DaysevenPageModule = class DaysevenPageModule {
};
DaysevenPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaysevenPage]
    })
], DaysevenPageModule);
export { DaysevenPageModule };
//# sourceMappingURL=dayseven.module.js.map