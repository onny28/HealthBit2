import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    }
                ]
            },
            {
                path: 'record',
                children: [
                    {
                        path: '',
                        loadChildren: '../record/record.module#RecordPageModule'
                    }
                ]
            },
            {
                path: 'grocerylist',
                children: [
                    {
                        path: '',
                        loadChildren: '../grocerylist/grocerylist.module#GrocerylistPageModule'
                    }
                ]
            },
            {
                path: 'setting',
                children: [
                    {
                        path: '',
                        loadChildren: '../setting/setting.module#SettingPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    })
], TabsPageRoutingModule);
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map