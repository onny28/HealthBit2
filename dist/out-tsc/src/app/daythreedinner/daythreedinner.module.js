import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaythreedinnerPage } from './daythreedinner.page';
const routes = [
    {
        path: '',
        component: DaythreedinnerPage
    }
];
let DaythreedinnerPageModule = class DaythreedinnerPageModule {
};
DaythreedinnerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaythreedinnerPage]
    })
], DaythreedinnerPageModule);
export { DaythreedinnerPageModule };
//# sourceMappingURL=daythreedinner.module.js.map