import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayonedinnerPage } from './dayonedinner.page';
const routes = [
    {
        path: '',
        component: DayonedinnerPage
    }
];
let DayonedinnerPageModule = class DayonedinnerPageModule {
};
DayonedinnerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayonedinnerPage]
    })
], DayonedinnerPageModule);
export { DayonedinnerPageModule };
//# sourceMappingURL=dayonedinner.module.js.map