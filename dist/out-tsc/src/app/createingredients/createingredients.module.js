import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CreateingredientsPage } from './createingredients.page';
const routes = [
    {
        path: '',
        component: CreateingredientsPage
    }
];
let CreateingredientsPageModule = class CreateingredientsPageModule {
};
CreateingredientsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CreateingredientsPage]
    })
], CreateingredientsPageModule);
export { CreateingredientsPageModule };
//# sourceMappingURL=createingredients.module.js.map