import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GenderPage } from './gender.page';
const routes = [
    {
        path: '',
        component: GenderPage
    }
];
let GenderPageModule = class GenderPageModule {
};
GenderPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [GenderPage]
    })
], GenderPageModule);
export { GenderPageModule };
//# sourceMappingURL=gender.module.js.map