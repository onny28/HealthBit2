import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResepiListPage } from './resepi-list.page';
const routes = [
    {
        path: '',
        component: ResepiListPage
    }
];
let ResepiListPageModule = class ResepiListPageModule {
};
ResepiListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ResepiListPage]
    })
], ResepiListPageModule);
export { ResepiListPageModule };
//# sourceMappingURL=resepi-list.module.js.map