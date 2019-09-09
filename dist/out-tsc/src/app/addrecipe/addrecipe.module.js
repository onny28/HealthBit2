import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddrecipePage } from './addrecipe.page';
const routes = [
    {
        path: '',
        component: AddrecipePage
    }
];
let AddrecipePageModule = class AddrecipePageModule {
};
AddrecipePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AddrecipePage]
    })
], AddrecipePageModule);
export { AddrecipePageModule };
//# sourceMappingURL=addrecipe.module.js.map