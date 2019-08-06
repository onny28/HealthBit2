import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
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
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}