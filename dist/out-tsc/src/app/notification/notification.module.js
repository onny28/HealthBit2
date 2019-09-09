import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NotificationPage } from './notification.page';
const routes = [
    {
        path: '',
        component: NotificationPage
    }
];
let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [NotificationPage]
    })
], NotificationPageModule);
export { NotificationPageModule };
//# sourceMappingURL=notification.module.js.map