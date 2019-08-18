import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DaythreelunchPage } from './daythreelunch.page';

const routes: Routes = [
  {
    path: '',
    component: DaythreelunchPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DaythreelunchPage]
})
export class DaythreelunchPageModule {}
