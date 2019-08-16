import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayfivelunchPage } from './dayfivelunch.page';

const routes: Routes = [
  {
    path: '',
    component: DayfivelunchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayfivelunchPage]
})
export class DayfivelunchPageModule {}
