import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DaysixbreakfastPage } from './daysixbreakfast.page';
const routes = [
    {
        path: '',
        component: DaysixbreakfastPage
    }
];
let DaysixbreakfastPageModule = class DaysixbreakfastPageModule {
};
DaysixbreakfastPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DaysixbreakfastPage]
    })
], DaysixbreakfastPageModule);
export { DaysixbreakfastPageModule };
//# sourceMappingURL=daysixbreakfast.module.js.map