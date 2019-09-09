import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaytwodinnerPage } from './daytwodinner.page';
const routes = [
    {
        path: '',
        component: DaytwodinnerPage
    }
];
let DaytwodinnerPageModule = class DaytwodinnerPageModule {
};
DaytwodinnerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaytwodinnerPage]
    })
], DaytwodinnerPageModule);
export { DaytwodinnerPageModule };
//# sourceMappingURL=daytwodinner.module.js.map