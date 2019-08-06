import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GrocerylistPage } from './grocerylist.page';

const routes: Routes = [
  {
    path: '',
    component: GrocerylistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GrocerylistPage]
})
export class GrocerylistPageModule {}
