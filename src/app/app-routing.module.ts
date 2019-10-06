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
  { path: 'recipes', loadChildren: './recipe/recipe.module#RecipePageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'register-details/:id', loadChildren: './register-details/register-details.module#RegisterDetailsPageModule' },
  { path: 'recipe', loadChildren: './viewrecipepage/viewrecipepage.module#ViewrecipepagePageModule' },
  { path: 'recipe/:id ', loadChildren: './viewrecipepage/viewrecipepage.module#ViewrecipepagePageModule' },
  { path: 'addrecipe', loadChildren: './addrecipe/addrecipe.module#AddrecipePageModule' },
  { path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsPageModule' },
  { path: 'locationdetail', loadChildren: './locationdetail/locationdetail.module#LocationdetailPageModule' },
  { path: 'locationdetail/:id', loadChildren: './locationdetail/locationdetail.module#LocationdetailPageModule' },
  { path: 'idea-list', loadChildren: './pages/idea-list/idea-list.module#IdeaListPageModule' },
  { path: 'idea', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  { path: 'idea/:id', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  { path: 'resepi', loadChildren: './pages/resepi/resepi.module#ResepiPageModule' },
  { path: 'resepi-list', loadChildren: './pages/resepi-list/resepi-list.module#ResepiListPageModule' },
  { path: 'resepis', loadChildren: './pages/resepi-details/resepi-details.module#ResepiDetailsPageModule' },
  { path: 'resepis/:id', loadChildren: './pages/resepi-details/resepi-details.module#ResepiDetailsPageModule' },
  { path: 'adminpage', loadChildren: './adminpage/adminpage.module#AdminpagePageModule' },
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