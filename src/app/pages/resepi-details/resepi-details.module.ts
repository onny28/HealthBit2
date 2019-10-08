import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResepiDetailsPage } from './resepi-details.page';

const routes: Routes = [
  {
    path: '',
    component: ResepiDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResepiDetailsPage]
})
export class ResepiDetailsPageModule {}
