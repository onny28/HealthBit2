import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaysixlunchPage } from './daysixlunch.page';
const routes = [
    {
        path: '',
        component: DaysixlunchPage
    }
];
let DaysixlunchPageModule = class DaysixlunchPageModule {
};
DaysixlunchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaysixlunchPage]
    })
], DaysixlunchPageModule);
export { DaysixlunchPageModule };
//# sourceMappingURL=daysixlunch.module.js.map