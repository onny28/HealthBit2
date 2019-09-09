import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaysevenbreakfastPage } from './daysevenbreakfast.page';
const routes = [
    {
        path: '',
        component: DaysevenbreakfastPage
    }
];
let DaysevenbreakfastPageModule = class DaysevenbreakfastPageModule {
};
DaysevenbreakfastPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaysevenbreakfastPage]
    })
], DaysevenbreakfastPageModule);
export { DaysevenbreakfastPageModule };
//# sourceMappingURL=daysevenbreakfast.module.js.map