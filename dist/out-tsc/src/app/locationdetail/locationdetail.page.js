import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LocationService } from '../location.service';
let LocationdetailPage = class LocationdetailPage {
    constructor(activatedRoute, locationService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.locationService = locationService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.location = {
            name: '',
            address: '',
        };
    }
    ngOnInit() {
    }
    // ionViewWillEnter() {
    //   let id = this.activatedRoute.snapshot.paramMap.get();
    //   if (id) {
    //     this.locationService.getLocation(id).subscribe(location => {
    //       this.location = location;
    //     });
    //   } 
    // }
    addLocation() {
        this.locationService.addLocation(this.location).then(() => {
            this.router.navigateByUrl('/places');
            this.showToast('Location added');
        }, err => {
            this.showToast('There was a problem adding your location :(');
        });
    }
    deleteLocation() {
        this.locationService.deleteLocation(this.location.id).then(() => {
            this.router.navigateByUrl('/places');
            this.showToast('Location deleted');
        }, err => {
            this.showToast('There was a problem deleting your location :(');
        });
    }
    updateLocation() {
        this.locationService.updateLocation(this.location).then(() => {
            this.showToast('Location updated');
        }, err => {
            this.showToast('There was a problem updating your location :(');
        });
    }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
};
LocationdetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-locationdetail',
        templateUrl: './locationdetail.page.html',
        styleUrls: ['./locationdetail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, LocationService,
        ToastController, Router])
], LocationdetailPage);
export { LocationdetailPage };
//# sourceMappingURL=locationdetail.page.js.map