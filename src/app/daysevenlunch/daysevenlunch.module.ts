import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaysevenlunchPage } from './daysevenlunch.page';

const routes: Routes = [
  {
    path: '',
    component: DaysevenlunchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaysevenlunchPage]
})
export class DaysevenlunchPageModule {}
