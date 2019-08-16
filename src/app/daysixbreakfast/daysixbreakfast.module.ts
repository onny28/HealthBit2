import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaysixbreakfastPage } from './daysixbreakfast.page';

const routes: Routes = [
  {
    path: '',
    component: DaysixbreakfastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaysixbreakfastPage]
})
export class DaysixbreakfastPageModule {}
