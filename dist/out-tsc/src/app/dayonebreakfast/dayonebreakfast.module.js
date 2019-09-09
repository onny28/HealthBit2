import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayonebreakfastPage } from './dayonebreakfast.page';
const routes = [
    {
        path: '',
        component: DayonebreakfastPage
    }
];
let DayonebreakfastPageModule = class DayonebreakfastPageModule {
};
DayonebreakfastPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayonebreakfastPage]
    })
], DayonebreakfastPageModule);
export { DayonebreakfastPageModule };
//# sourceMappingURL=dayonebreakfast.module.js.map