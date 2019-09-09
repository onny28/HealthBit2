import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayonelunchPage } from './dayonelunch.page';
const routes = [
    {
        path: '',
        component: DayonelunchPage
    }
];
let DayonelunchPageModule = class DayonelunchPageModule {
};
DayonelunchPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayonelunchPage]
    })
], DayonelunchPageModule);
export { DayonelunchPageModule };
//# sourceMappingURL=dayonelunch.module.js.map