import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'record', loadChildren: './record/record.module#RecordPageModule' },
    { path: 'grocerylist', loadChildren: './grocerylist/grocerylist.module#GrocerylistPageModule' },
    { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
    { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
    { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'recipes', loadChildren: './recipe/recipe.module#RecipePageModule' },
    { path: 'gender', loadChildren: './gender/gender.module#GenderPageModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
    { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
    { path: 'display', loadChildren: './display/display.module#DisplayPageModule' },
    { path: 'bmi', loadChildren: './bmi/bmi.module#BmiPageModule' },
    { path: 'healthyplan', loadChildren: './healthyplan/healthyplan.module#HealthyplanPageModule' },
    { path: 'dayone', loadChildren: './dayone/dayone.module#DayonePageModule' },
    { path: 'daytwo', loadChildren: './daytwo/daytwo.module#DaytwoPageModule' },
    { path: 'daythree', loadChildren: './daythree/daythree.module#DaythreePageModule' },
    { path: 'dayfour', loadChildren: './dayfour/dayfour.module#DayfourPageModule' },
    { path: 'dayfive', loadChildren: './dayfive/dayfive.module#DayfivePageModule' },
    { path: 'daysix', loadChildren: './daysix/daysix.module#DaysixPageModule' },
    { path: 'dayseven', loadChildren: './dayseven/dayseven.module#DaysevenPageModule' },
    { path: 'dayonebreakfast', loadChildren: './dayonebreakfast/dayonebreakfast.module#DayonebreakfastPageModule' },
    { path: 'dayonelunch', loadChildren: './dayonelunch/dayonelunch.module#DayonelunchPageModule' },
    { path: 'dayonedinner', loadChildren: './dayonedinner/dayonedinner.module#DayonedinnerPageModule' },
    { path: 'daytwobreakfast', loadChildren: './daytwobreakfast/daytwobreakfast.module#DaytwobreakfastPageModule' },
    { path: 'daytwolunch', loadChildren: './daytwolunch/daytwolunch.module#DaytwolunchPageModule' },
    { path: 'daytwodinner', loadChildren: './daytwodinner/daytwodinner.module#DaytwodinnerPageModule' },
    { path: 'daythreebreakfast', loadChildren: './daythreebreakfast/daythreebreakfast.module#DaythreebreakfastPageModule' },
    { path: 'daythreelunch', loadChildren: './daythreelunch/daythreelunch.module#DaythreelunchPageModule' },
    { path: 'daythreedinner', loadChildren: './daythreedinner/daythreedinner.module#DaythreedinnerPageModule' },
    { path: 'dayfourbreakfast', loadChildren: './dayfourbreakfast/dayfourbreakfast.module#DayfourbreakfastPageModule' },
    { path: 'dayfourlunch', loadChildren: './dayfourlunch/dayfourlunch.module#DayfourlunchPageModule' },
    { path: 'dayfourdinner', loadChildren: './dayfourdinner/dayfourdinner.module#DayfourdinnerPageModule' },
    { path: 'dayfivebreakfast', loadChildren: './dayfivebreakfast/dayfivebreakfast.module#DayfivebreakfastPageModule' },
    { path: 'dayfivelunch', loadChildren: './dayfivelunch/dayfivelunch.module#DayfivelunchPageModule' },
    { path: 'dayfivedinner', loadChildren: './dayfivedinner/dayfivedinner.module#DayfivedinnerPageModule' },
    { path: 'daysixbreakfast', loadChildren: './daysixbreakfast/daysixbreakfast.module#DaysixbreakfastPageModule' },
    { path: 'daysixlunch', loadChildren: './daysixlunch/daysixlunch.module#DaysixlunchPageModule' },
    { path: 'daysixdinner', loadChildren: './daysixdinner/daysixdinner.module#DaysixdinnerPageModule' },
    { path: 'daysevenbreakfast', loadChildren: './daysevenbreakfast/daysevenbreakfast.module#DaysevenbreakfastPageModule' },
    { path: 'daysevenlunch', loadChildren: './daysevenlunch/daysevenlunch.module#DaysevenlunchPageModule' },
    { path: 'daysevendinner', loadChildren: './daysevendinner/daysevendinner.module#DaysevendinnerPageModule' },
    { path: 'recipe', loadChildren: './viewrecipepage/viewrecipepage.module#ViewrecipepagePageModule' },
    { path: 'recipe/:id ', loadChildren: './viewrecipepage/viewrecipepage.module#ViewrecipepagePageModule' },
    { path: 'addrecipe', loadChildren: './addrecipe/addrecipe.module#AddrecipePageModule' },
    { path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsPageModule' },
    { path: 'createingredients', loadChildren: './createingredients/createingredients.module#CreateingredientsPageModule' },
    { path: 'createingredients/:id', loadChildren: './createingredients/createingredients.module#CreateingredientsPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map