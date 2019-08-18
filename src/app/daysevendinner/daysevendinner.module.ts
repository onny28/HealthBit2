import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaysevendinnerPage } from './daysevendinner.page';

const routes: Routes = [
  {
    path: '',
    component: DaysevendinnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaysevendinnerPage]
})
export class DaysevendinnerPageModule {}
