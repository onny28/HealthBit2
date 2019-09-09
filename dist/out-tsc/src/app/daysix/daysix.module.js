import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaysixPage } from './daysix.page';
const routes = [
    {
        path: '',
        component: DaysixPage
    }
];
let DaysixPageModule = class DaysixPageModule {
};
DaysixPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaysixPage]
    })
], DaysixPageModule);
export { DaysixPageModule };
//# sourceMappingURL=daysix.module.js.map