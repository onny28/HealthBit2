import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
let DaytwolunchPage = class DaytwolunchPage {
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
], DaytwolunchPage.prototype, "slider", void 0);
DaytwolunchPage = tslib_1.__decorate([
    Component({
        selector: 'app-daytwolunch',
        templateUrl: './daytwolunch.page.html',
        styleUrls: ['./daytwolunch.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DaytwolunchPage);
export { DaytwolunchPage };
//# sourceMappingURL=daytwolunch.page.js.map