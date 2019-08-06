import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'record', loadChildren: './record/record.module#RecordPageModule' },
  { path: 'grocerylist', loadChildren: './grocerylist/grocerylist.module#GrocerylistPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'recipe', loadChildren: './recipe/recipe.module#RecipePageModule' },

<<<<<<< HEAD

const routes: Routes = [
  { path: '', redirectTo: 'gender', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'gender', loadChildren: './gender/gender.module#GenderPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 348d78ed6ae4944818103f5e6d2ef2f6881d9c49
