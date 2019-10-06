import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'record', loadChildren: './record/record.module#RecordPageModule' },
  { path: 'grocerylist', loadChildren: './grocerylist/grocerylist.module#GrocerylistPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'recipes', loadChildren: './recipe/recipe.module#RecipePageModule' },
  { path: 'gender', loadChildren: './gender/gender.module#GenderPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'display', loadChildren: './display/display.module#DisplayPageModule' },
  { path: 'bmi', loadChildren: './bmi/bmi.module#BmiPageModule' },
  { path: 'healthyplan', loadChildren: './healthyplan/healthyplan.module#HealthyplanPageModule' },
  { path: 'viewrecipepage', loadChildren: './viewrecipepage/viewrecipepage.module#ViewrecipepagePageModule' },
  { path: 'register-details/:id', loadChildren: './register-details/register-details.module#RegisterDetailsPageModule' },
  { path: 'recipe', loadChildren: './viewrecipepage/viewrecipepage.module#ViewrecipepagePageModule' },
  { path: 'recipe/:id ', loadChildren: './viewrecipepage/viewrecipepage.module#ViewrecipepagePageModule' },
  { path: 'addrecipe', loadChildren: './addrecipe/addrecipe.module#AddrecipePageModule' },
  { path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsPageModule' },
  { path: 'createingredients', loadChildren: './createingredients/createingredients.module#CreateingredientsPageModule' },
  { path: 'createingredients/:id', loadChildren: './createingredients/createingredients.module#CreateingredientsPageModule' },
  { path: 'idea-list', loadChildren: './idea-list/idea-list.module#IdeaListPageModule' },
  { path: 'idea', loadChildren: './idea-detail/idea-detail.module#IdeaDetailPageModule' },
  { path: 'idea:/id', loadChildren: './idea-detail/idea-detail.module#IdeaDetailPageModule' },  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },


  


 ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }