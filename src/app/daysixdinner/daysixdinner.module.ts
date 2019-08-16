import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaysixdinnerPage } from './daysixdinner.page';

const routes: Routes = [
  {
    path: '',
    component: DaysixdinnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaysixdinnerPage]
})
export class DaysixdinnerPageModule {}
