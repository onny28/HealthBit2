import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController } from '@ionic/angular';
let LoginPage = class LoginPage {
    constructor(afAuth, navCtrl, toastController) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.email = "";
        this.password = "";
    }
    ngOnInit() {
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.email == "") {
                const toast = yield this.toastController.create({
                    message: 'Email can not be empty',
                    duration: 2000
                });
                toast.present();
            }
            else if (this.password == "") {
                const toast = yield this.toastController.create({
                    message: 'Password can not be empty',
                    duration: 2000
                });
                toast.present();
            }
            const { email, password } = this;
            try {
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
                console.log("You have successfully login");
                this.navCtrl.navigateForward('/home');
                const toast = yield this.toastController.create({
                    message: 'Successful',
                    duration: 2000
                });
                toast.present();
            }
            catch (err) {
                console.dir(err);
                if (err.code == "auth/user-not-found") {
                    console.log("User not found");
                    const toast = yield this.toastController.create({
                        message: 'User not found',
                        duration: 2000
                    });
                    toast.present();
                }
                if (err.code == "auth/wrong-password") {
                    console.log("wrong password");
                    const toast = yield this.toastController.create({
                        message: 'Wrong password.',
                        duration: 2000
                    });
                    toast.present();
                }
            }
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth, NavController, ToastController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map