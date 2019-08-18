import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayfivebreakfastPage } from './dayfivebreakfast.page';

const routes: Routes = [
  {
    path: '',
    component: DayfivebreakfastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayfivebreakfastPage]
})
export class DayfivebreakfastPageModule {}
