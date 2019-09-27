import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IdeaListPage } from './idea-list.page';
const routes = [
    {
        path: '',
        component: IdeaListPage
    }
];
let IdeaListPageModule = class IdeaListPageModule {
};
IdeaListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [IdeaListPage]
    })
], IdeaListPageModule);
export { IdeaListPageModule };
//# sourceMappingURL=idea-list.module.js.map