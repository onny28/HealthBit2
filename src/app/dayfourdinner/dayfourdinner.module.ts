import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DayfourdinnerPage } from './dayfourdinner.page';

const routes: Routes = [
  {
    path: '',
    component: DayfourdinnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DayfourdinnerPage]
})
export class DayfourdinnerPageModule {}
