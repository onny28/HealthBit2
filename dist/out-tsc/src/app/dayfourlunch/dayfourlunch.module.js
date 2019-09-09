import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayfourlunchPage } from './dayfourlunch.page';
const routes = [
    {
        path: '',
        component: DayfourlunchPage
    }
];
let DayfourlunchPageModule = class DayfourlunchPageModule {
};
DayfourlunchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayfourlunchPage]
    })
], DayfourlunchPageModule);
export { DayfourlunchPageModule };
//# sourceMappingURL=dayfourlunch.module.js.map