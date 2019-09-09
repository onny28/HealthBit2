import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BmiPage } from './bmi.page';
const routes = [
    {
        path: '',
        component: BmiPage
    }
];
let BmiPageModule = class BmiPageModule {
};
BmiPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [BmiPage]
    })
], BmiPageModule);
export { BmiPageModule };
// store to database
class MyClass {
    constructor(storage) {
        this.storage = storage;
    }
    setData(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.storage.set(key, value);
            console.log(res);
        });
    }
    getData(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const keyVal = yield this.storage.get(key);
            console.log('Key is', keyVal);
        });
    }
}
//# sourceMappingURL=bmi.module.js.map