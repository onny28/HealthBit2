import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayfourlunchPage } from './dayfourlunch.page';

const routes: Routes = [
  {
    path: '',
    component: DayfourlunchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayfourlunchPage]
})
export class DayfourlunchPageModule {}
