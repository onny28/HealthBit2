import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResepiService } from '../../services/resepi.service';
import { ToastController } from '@ionic/angular';
let ResepiDetailsPage = class ResepiDetailsPage {
    constructor(activatedRoute, resepiService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.resepiService = resepiService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.resepi = {
            name: '',
            category: '',
            steps: ''
        };
    }
    ngOnInit() { }
    ionViewWillEnter() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.resepiService.getIdea(id).subscribe(resepi => {
                this.resepi = resepi;
            });
        }
    }
    addIdea() {
        this.resepiService.addIdea(this.resepi).then(() => {
            this.router.navigateByUrl('/resepi-list');
            this.showToast('Recipe added to the feed');
        }, err => {
            this.showToast('There was a problem adding your recipe :(');
        });
    }
    deleteIdea() {
        this.resepiService.deleteIdea(this.resepi.id).then(() => {
            this.router.navigateByUrl('/resepi-list');
            this.showToast('Recipe deleted');
        }, err => {
            this.showToast('There was a problem deleting your recipes :(');
        });
    }
    updateIdea() {
        this.resepiService.updateIdea(this.resepi).then(() => {
            this.showToast('Recipe updated');
        }, err => {
            this.showToast('There was a problem updating your resepi :(');
        });
    }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
};
ResepiDetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-resepi-details',
        templateUrl: './resepi-details.page.html',
        styleUrls: ['./resepi-details.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ResepiService,
        ToastController, Router])
], ResepiDetailsPage);
export { ResepiDetailsPage };
//# sourceMappingURL=resepi-details.page.js.map