import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PlacesPage } from './places.page';
const routes = [
    {
        path: '',
        component: PlacesPage
    }
];
let PlacesPageModule = class PlacesPageModule {
};
PlacesPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [PlacesPage]
    })
], PlacesPageModule);
export { PlacesPageModule };
//# sourceMappingURL=places.module.js.map