import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
let HomePage = class HomePage {
    constructor(navCtrl, firebaseService) {
        this.navCtrl = navCtrl;
        this.firebaseService = firebaseService;
    }
    ngOnInit() {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
        }
        else {
            // No user is signed in.
            this.navCtrl.navigateBack('/login');
        }
    }
    logout() {
        this.firebaseService.logoutUser()
            .then(res => {
            console.log(res);
            this.navCtrl.navigateBack('');
        })
            .catch(error => {
            console.log(error);
        });
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController,
        FirebaseService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map