import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LocationService } from '../location.service';
import { NavController } from '@ionic/angular';
let PlacesPage = class PlacesPage {
    constructor(locationService, navCtrl) {
        this.locationService = locationService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.locations = this.locationService.getLocations();
    }
    goToLocationDetails() {
        this.navCtrl.navigateForward('/locationdetail/:id');
    }
};
PlacesPage = tslib_1.__decorate([
    Component({
        selector: 'app-places',
        templateUrl: './places.page.html',
        styleUrls: ['./places.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [LocationService,
        NavController])
], PlacesPage);
export { PlacesPage };
//# sourceMappingURL=places.page.js.map