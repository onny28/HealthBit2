import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ResepiDetailsPage } from './resepi-details.page';
const routes = [
    {
        path: '',
        component: ResepiDetailsPage
    }
];
let ResepiDetailsPageModule = class ResepiDetailsPageModule {
};
ResepiDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [ResepiDetailsPage]
    })
], ResepiDetailsPageModule);
export { ResepiDetailsPageModule };
//# sourceMappingURL=resepi-details.module.js.map