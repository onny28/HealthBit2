import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'record/:id', loadChildren: './record/record.module#RecordPageModule' },
  { path: 'grocerylist', loadChildren: './grocerylist/grocerylist.module#GrocerylistPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'register-details/:id', loadChildren: './register-details/register-details.module#RegisterDetailsPageModule' },
  { path: 'idea-list', loadChildren: './pages/idea-list/idea-list.module#IdeaListPageModule' },
  { path: 'idea', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  { path: 'idea/:id', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  { path: 'adminpage', loadChildren: './adminpage/adminpage.module#AdminpagePageModule' },
  { path: 'idea2', loadChildren: './adminrecipe/adminrecipe.module#AdminrecipePageModule' },
  { path: 'idea2/:id', loadChildren: './adminrecipe/adminrecipe.module#AdminrecipePageModule' },
  { path: 'adminuser', loadChildren: './adminuser/adminuser.module#AdminuserPageModule' },
  { path: 'adminrecipe', loadChildren: './adminrecipe/adminrecipe.module#AdminrecipePageModule' },
  { path: 'create-location', loadChildren: './create-location/create-location.module#CreateLocationPageModule' },


 ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }