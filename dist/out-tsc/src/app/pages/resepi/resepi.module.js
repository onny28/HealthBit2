import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResepiPage } from './resepi.page';
const routes = [
    {
        path: '',
        component: ResepiPage
    }
];
let ResepiPageModule = class ResepiPageModule {
};
ResepiPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ResepiPage]
    })
], ResepiPageModule);
export { ResepiPageModule };
//# sourceMappingURL=resepi.module.js.map