import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaytwoPage } from './daytwo.page';
const routes = [
    {
        path: '',
        component: DaytwoPage
    }
];
let DaytwoPageModule = class DaytwoPageModule {
};
DaytwoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaytwoPage]
    })
], DaytwoPageModule);
export { DaytwoPageModule };
//# sourceMappingURL=daytwo.module.js.map