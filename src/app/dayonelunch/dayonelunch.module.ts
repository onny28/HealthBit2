import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayonelunchPage } from './dayonelunch.page';

const routes: Routes = [
  {
    path: '',
    component: DayonelunchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayonelunchPage]
})
export class DayonelunchPageModule {}
