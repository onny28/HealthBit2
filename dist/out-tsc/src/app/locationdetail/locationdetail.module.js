import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LocationdetailPage } from './locationdetail.page';
const routes = [
    {
        path: '',
        component: LocationdetailPage
    }
];
let LocationdetailPageModule = class LocationdetailPageModule {
};
LocationdetailPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LocationdetailPage]
    })
], LocationdetailPageModule);
export { LocationdetailPageModule };
//# sourceMappingURL=locationdetail.module.js.map