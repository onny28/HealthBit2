import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/auth';
import 'firebase/firestore';
// import { AuthenticationService } from '../services/authentication.service'
let SignupPage = class SignupPage {
    constructor(afAuth, navCtrl, toastController, formBuilder, loadingCtrl, alertCtrl, router, route, 
    // private firebaseService: FirebaseService,
    // private authService: AuthenticationService,
    alertController) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.route = route;
        this.alertController = alertController;
        this.isActiveToggleTextPassword = true;
        this.error_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Enter a valid email' }
            ],
            'cpassword': [
                { type: 'required', message: 'Confirm password is required' },
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 6 characters long' },
                { type: 'pattern', message: 'Your password can contain characters, numbers and symbol' }
            ],
        };
        this.signupForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                // Validators.minLength(6),
                // Validators.maxLength(50),
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30),
                Validators.pattern('^[a-zA-Z0-9?=.*-_!#$%&@+]+$')
                // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9?=.*-_!#$%&]+$')
            ])),
            cpassword: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30),
                Validators.pattern('^[a-zA-Z0-9?=.*-_!#$%&@+]+$')
                // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
        });
    }
    ngOnInit() {
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
    //For show/hide user password
    toggleTextPassword() {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
    }
    getType() {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
    }
    signup() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email, password, cpassword } = this;
            if (password != cpassword) {
                console.error("Password did not match");
                const toast = yield this.toastController.create({
                    message: 'Password did not match',
                    duration: 2000,
                });
                toast.present();
            }
            this.loadingFunction('Loading...');
            try {
                //   return firebase
                //   .auth()
                //   .createUserWithEmailAndPassword(email, password)
                //   .then(async (newUserCredential: firebase.auth.UserCredential) => {
                //   firebase
                //     .firestore()
                //     .doc(`/userProfile/${newUserCredential.user.uid}`)
                //     .set({ email , password });
                //     console.log("Successfully created account")
                //   this.navCtrl.navigateForward('register-details/:id')
                //   const toast = await this.toastController.create({
                //     message: 'Your account has successfully created.',
                //     duration: 2000
                //   });
                //   toast.present();
                // })
                yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
                // .then (async (newUserCredential: firebase.auth.UserCredential) => {
                //     firebase
                //       .firestore()
                //       .doc(`/userProfile/${newUserCredential.user.uid}`)
                //       .set({ email , password });
                //     });
                this.loaderDismiss();
                console.log("Successfully created account");
                this.navCtrl.navigateForward('register-details/:id');
                const toast = yield this.toastController.create({
                    message: 'Your account has successfully created.',
                    duration: 2000
                });
                toast.present();
            }
            catch (error) {
                this.loaderDismiss();
                console.dir(error);
                if (error.code == "auth/email-already-in-use") {
                    console.log("Account already used.");
                    const toast = yield this.toastController.create({
                        message: 'Account already used.',
                        duration: 2000,
                    });
                    toast.present();
                }
            }
        });
    }
    // tryRegister(value){
    //   this.authService.registerUser(value)
    //    .then(res => {
    //      console.log(res);
    //      this.errorMessage = "Already register";
    //      this.successMessage = "Your account has been created. Please log in.";
    //    }, err => {
    //      console.log(err);
    //      this.errorMessage = err.message;
    //      this.successMessage = "";
    //    })
    // }
    goLoginPage() {
        this.navCtrl.navigateBack('/login');
    }
};
SignupPage = tslib_1.__decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.page.html',
        styleUrls: ['./signup.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
        NavController,
        ToastController,
        FormBuilder,
        LoadingController,
        AlertController,
        Router,
        ActivatedRoute,
        AlertController])
], SignupPage);
export { SignupPage };
//# sourceMappingURL=signup.page.js.map