import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DayfourdinnerPage } from './dayfourdinner.page';
const routes = [
    {
        path: '',
        component: DayfourdinnerPage
    }
];
let DayfourdinnerPageModule = class DayfourdinnerPageModule {
};
DayfourdinnerPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [DayfourdinnerPage]
    })
], DayfourdinnerPageModule);
export { DayfourdinnerPageModule };
//# sourceMappingURL=dayfourdinner.module.js.map