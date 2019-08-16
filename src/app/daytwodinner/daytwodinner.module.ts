import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaytwodinnerPage } from './daytwodinner.page';

const routes: Routes = [
  {
    path: '',
    component: DaytwodinnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaytwodinnerPage]
})
export class DaytwodinnerPageModule {}
