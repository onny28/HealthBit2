import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
let LoginPage = class LoginPage {
    constructor(afAuth, navCtrl, toastController, 
    // private authService: AuthenticationService,
    formBuilder, loadingCtrl, alertController) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        // authRef: AngularFireAuth;
        // loading: any;
        this.email = "";
        this.password = "";
        this.errorMessage = '';
        this.isActiveToggleTextPassword = true;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 6 characters long' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
        };
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log('logged in');
                return navCtrl.navigateForward('/tabs/tabs/home');
            }
            else {
                // No user is signed in.
                return navCtrl.navigateForward('/login');
            }
        });
        this.validations_form = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(50),
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30),
                Validators.pattern('^[a-zA-Z0-9?=.*-_!#$%&@+]+$')
                // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
        });
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // this.loading = await this.loadingController.create({
            //   message: 'Connecting ...'
            // });
        });
    }
    loadingFunction(loadmsg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                message: loadmsg
            });
            yield this.loader.present();
        });
    }
    loaderDismiss() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.dismiss();
        });
    }
    // async presentLoading(loading) {
    //   await loading.present();
    // }
    //For show/hide user password
    toggleTextPassword() {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
    }
    getType() {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // await this.loading.present();
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
            this.loadingFunction('Loading...');
            try {
                // return this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                // .then( async () => {
                //   const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
                //   console.log("You have successfully login")
                //   this.navCtrl.navigateForward('/tabs/tabs/home')
                //   const toast = await this.toastController.create({
                //     message: 'Successful',
                //     duration: 2000
                //   });
                //   toast.present();
                // })
                const res = yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
                this.loaderDismiss();
                console.log("You have successfully login");
                this.navCtrl.navigateForward('/tabs/tabs/home');
                const toast = yield this.toastController.create({
                    message: 'Successful',
                    duration: 2000
                });
                toast.present();
            }
            catch (err) {
                this.loaderDismiss();
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
    goToRegisterPage() {
        this.navCtrl.navigateForward('/signup');
    }
    forgetPassword() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.afAuth.auth.sendPasswordResetEmail(this.email);
            const alert = yield this.alertController.create({
                header: 'Reset Password',
                message: 'Check Your Email to Reset Your Password',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
        NavController,
        ToastController,
        FormBuilder,
        LoadingController,
        AlertController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map