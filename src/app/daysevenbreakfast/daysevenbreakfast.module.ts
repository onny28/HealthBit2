import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaysevenbreakfastPage } from './daysevenbreakfast.page';

const routes: Routes = [
  {
    path: '',
    component: DaysevenbreakfastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaysevenbreakfastPage]
})
export class DaysevenbreakfastPageModule {}
