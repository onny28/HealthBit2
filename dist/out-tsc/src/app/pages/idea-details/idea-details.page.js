import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService } from '../../services/idea.service';
import { ToastController, IonSlides } from '@ionic/angular';
let IdeaDetailsPage = class IdeaDetailsPage {
    constructor(activatedRoute, ideaService, toastCtrl, router) {
        this.activatedRoute = activatedRoute;
        this.ideaService = ideaService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.idea = {
            name: '',
            notes: '',
            steps: '',
            ingredients: []
        };
        this.segment = 0;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.ideaService.getIdea(id).subscribe(idea => {
                this.idea = idea;
            });
        }
    }
    addIdea() {
        this.ideaService.addIdea(this.idea).then(() => {
            this.router.navigateByUrl('/idea-list');
            this.showToast('recipe added to the feed');
        }, err => {
            this.showToast('There was a problem adding your recipe. ');
        });
    }
    deleteIdea() {
        this.ideaService.deleteIdea(this.idea.id).then(() => {
            this.router.navigateByUrl('/idea-list');
            this.showToast('recipe deleted');
        }, err => {
            this.showToast('There was a problem deleting your recipe. ');
        });
    }
    updateIdea() {
        this.ideaService.updateIdea(this.idea).then(() => {
            this.showToast('recipe updated');
        }, err => {
            this.showToast('There was a problem updating your recipe. ');
        });
    }
    showToast(msg) {
        this.toastCtrl.create({
            message: msg,
            duration: 2000
        }).then(toast => toast.present());
    }
    //slides
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
], IdeaDetailsPage.prototype, "slider", void 0);
IdeaDetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-idea-details',
        templateUrl: './idea-details.page.html',
        styleUrls: ['./idea-details.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, IdeaService,
        ToastController, Router])
], IdeaDetailsPage);
export { IdeaDetailsPage };
//# sourceMappingURL=idea-details.page.js.map