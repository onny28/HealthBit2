import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayonebreakfastPage } from './dayonebreakfast.page';

const routes: Routes = [
  {
    path: '',
    component: DayonebreakfastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayonebreakfastPage]
})
export class DayonebreakfastPageModule {}
