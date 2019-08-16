import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayfourbreakfastPage } from './dayfourbreakfast.page';

const routes: Routes = [
  {
    path: '',
    component: DayfourbreakfastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayfourbreakfastPage]
})
export class DayfourbreakfastPageModule {}
