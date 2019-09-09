import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecordPage } from './record.page';
const routes = [
    {
        path: '',
        component: RecordPage
    }
];
let RecordPageModule = class RecordPageModule {
};
RecordPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RecordPage]
    })
], RecordPageModule);
export { RecordPageModule };
//# sourceMappingURL=record.module.js.map