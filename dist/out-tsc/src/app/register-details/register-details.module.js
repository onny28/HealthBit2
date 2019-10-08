import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterDetailsPage } from './register-details.page';
const routes = [
    {
        path: '',
        component: RegisterDetailsPage
    }
];
let RegisterDetailsPageModule = class RegisterDetailsPageModule {
};
RegisterDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RegisterDetailsPage]
    })
], RegisterDetailsPageModule);
export { RegisterDetailsPageModule };
//# sourceMappingURL=register-details.module.js.map