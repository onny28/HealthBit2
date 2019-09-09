import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SettingPage } from './setting.page';
const routes = [
    {
        path: '',
        component: SettingPage
    }
];
let SettingPageModule = class SettingPageModule {
};
SettingPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SettingPage]
    })
], SettingPageModule);
export { SettingPageModule };
//# sourceMappingURL=setting.module.js.map