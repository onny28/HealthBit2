import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayonePage } from './dayone.page';
const routes = [
    {
        path: '',
        component: DayonePage
    }
];
let DayonePageModule = class DayonePageModule {
};
DayonePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayonePage]
    })
], DayonePageModule);
export { DayonePageModule };
//# sourceMappingURL=dayone.module.js.map