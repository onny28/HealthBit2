import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IdeaDetailsPage } from './idea-details.page';
const routes = [
    {
        path: '',
        component: IdeaDetailsPage
    }
];
let IdeaDetailsPageModule = class IdeaDetailsPageModule {
};
IdeaDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [IdeaDetailsPage]
    })
], IdeaDetailsPageModule);
export { IdeaDetailsPageModule };
//# sourceMappingURL=idea-details.module.js.map