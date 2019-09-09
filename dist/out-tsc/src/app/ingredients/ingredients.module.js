import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IngredientsPage } from './ingredients.page';
const routes = [
    {
        path: '',
        component: IngredientsPage
    }
];
let IngredientsPageModule = class IngredientsPageModule {
};
IngredientsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [IngredientsPage]
    })
], IngredientsPageModule);
export { IngredientsPageModule };
//# sourceMappingURL=ingredients.module.js.map