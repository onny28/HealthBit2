import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
let DaythreebreakfastPage = class DaythreebreakfastPage {
    constructor() {
        this.segment = 0;
    }
    ngOnInit() {
    }
    segmentChanged() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.slider.slideTo(this.segment);
        });
    }
    slideChanged() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.segment = yield this.slider.getActiveIndex();
        });
    }
};
tslib_1.__decorate([
    ViewChild('slides', { static: false }),
    tslib_1.__metadata("design:type", IonSlides)
], DaythreebreakfastPage.prototype, "slider", void 0);
DaythreebreakfastPage = tslib_1.__decorate([
    Component({
        selector: 'app-daythreebreakfast',
        templateUrl: './daythreebreakfast.page.html',
        styleUrls: ['./daythreebreakfast.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DaythreebreakfastPage);
export { DaythreebreakfastPage };
//# sourceMappingURL=daythreebreakfast.page.js.map