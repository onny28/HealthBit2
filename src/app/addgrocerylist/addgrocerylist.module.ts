import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddgrocerylistPage } from './addgrocerylist.page';

const routes: Routes = [
  {
    path: '',
    component: AddgrocerylistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddgrocerylistPage]
})
export class AddgrocerylistPageModule {}
