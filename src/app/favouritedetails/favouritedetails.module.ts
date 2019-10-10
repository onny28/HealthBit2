import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FavouritedetailsPage } from './favouritedetails.page';

const routes: Routes = [
  {
    path: '',
    component: FavouritedetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavouritedetailsPage]
})
export class FavouritedetailsPageModule {}
