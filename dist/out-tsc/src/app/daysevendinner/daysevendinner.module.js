import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaysevendinnerPage } from './daysevendinner.page';
const routes = [
    {
        path: '',
        component: DaysevendinnerPage
    }
];
let DaysevendinnerPageModule = class DaysevendinnerPageModule {
};
DaysevendinnerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaysevendinnerPage]
    })
], DaysevendinnerPageModule);
export { DaysevendinnerPageModule };
//# sourceMappingURL=daysevendinner.module.js.map