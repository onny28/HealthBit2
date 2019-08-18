import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaytwobreakfastPage } from './daytwobreakfast.page';

const routes: Routes = [
  {
    path: '',
    component: DaytwobreakfastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaytwobreakfastPage]
})
export class DaytwobreakfastPageModule {}
