import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
let DayfourdinnerPage = class DayfourdinnerPage {
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
], DayfourdinnerPage.prototype, "slider", void 0);
DayfourdinnerPage = tslib_1.__decorate([
    Component({
        selector: 'app-dayfourdinner',
        templateUrl: './dayfourdinner.page.html',
        styleUrls: ['./dayfourdinner.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DayfourdinnerPage);
export { DayfourdinnerPage };
//# sourceMappingURL=dayfourdinner.page.js.map