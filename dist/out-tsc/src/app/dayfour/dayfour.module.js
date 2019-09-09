import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayfourPage } from './dayfour.page';
const routes = [
    {
        path: '',
        component: DayfourPage
    }
];
let DayfourPageModule = class DayfourPageModule {
};
DayfourPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayfourPage]
    })
], DayfourPageModule);
export { DayfourPageModule };
//# sourceMappingURL=dayfour.module.js.map