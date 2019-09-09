import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaysixdinnerPage } from './daysixdinner.page';
const routes = [
    {
        path: '',
        component: DaysixdinnerPage
    }
];
let DaysixdinnerPageModule = class DaysixdinnerPageModule {
};
DaysixdinnerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaysixdinnerPage]
    })
], DaysixdinnerPageModule);
export { DaysixdinnerPageModule };
//# sourceMappingURL=daysixdinner.module.js.map