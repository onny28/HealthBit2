import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaythreePage } from './daythree.page';
const routes = [
    {
        path: '',
        component: DaythreePage
    }
];
let DaythreePageModule = class DaythreePageModule {
};
DaythreePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaythreePage]
    })
], DaythreePageModule);
export { DaythreePageModule };
//# sourceMappingURL=daythree.module.js.map