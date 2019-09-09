import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayfivedinnerPage } from './dayfivedinner.page';
const routes = [
    {
        path: '',
        component: DayfivedinnerPage
    }
];
let DayfivedinnerPageModule = class DayfivedinnerPageModule {
};
DayfivedinnerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayfivedinnerPage]
    })
], DayfivedinnerPageModule);
export { DayfivedinnerPageModule };
//# sourceMappingURL=dayfivedinner.module.js.map