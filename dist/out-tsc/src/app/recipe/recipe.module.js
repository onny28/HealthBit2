import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecipePage } from './recipe.page';
const routes = [
    {
        path: '',
        component: RecipePage
    }
];
let RecipePageModule = class RecipePageModule {
};
RecipePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RecipePage]
    })
], RecipePageModule);
export { RecipePageModule };
//# sourceMappingURL=recipe.module.js.map