import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayfivePage } from './dayfive.page';
const routes = [
    {
        path: '',
        component: DayfivePage
    }
];
let DayfivePageModule = class DayfivePageModule {
};
DayfivePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayfivePage]
    })
], DayfivePageModule);
export { DayfivePageModule };
//# sourceMappingURL=dayfive.module.js.map