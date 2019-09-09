import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaythreelunchPage } from './daythreelunch.page';
const routes = [
    {
        path: '',
        component: DaythreelunchPage
    }
];
let DaythreelunchPageModule = class DaythreelunchPageModule {
};
DaythreelunchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaythreelunchPage]
    })
], DaythreelunchPageModule);
export { DaythreelunchPageModule };
//# sourceMappingURL=daythreelunch.module.js.map