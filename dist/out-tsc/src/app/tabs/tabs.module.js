import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabsPageRoutingModule } from './tabs.router.module';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: '',
        component: TabsPage
    }
];
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TabsPageRoutingModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TabsPage]
    })
], TabsPageModule);
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map