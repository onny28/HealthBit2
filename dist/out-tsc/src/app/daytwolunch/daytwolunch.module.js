import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaytwolunchPage } from './daytwolunch.page';
const routes = [
    {
        path: '',
        component: DaytwolunchPage
    }
];
let DaytwolunchPageModule = class DaytwolunchPageModule {
};
DaytwolunchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaytwolunchPage]
    })
], DaytwolunchPageModule);
export { DaytwolunchPageModule };
//# sourceMappingURL=daytwolunch.module.js.map