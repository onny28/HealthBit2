import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DisplayPage } from './display.page';
const routes = [
    {
        path: '',
        component: DisplayPage
    }
];
let DisplayPageModule = class DisplayPageModule {
};
DisplayPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DisplayPage]
    })
], DisplayPageModule);
export { DisplayPageModule };
//# sourceMappingURL=display.module.js.map