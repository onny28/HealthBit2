import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
let SignupPage = class SignupPage {
    constructor(afAuth, navCtrl, toastController, formBuilder) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.email = "";
        this.password = "";
        this.cpassword = "";
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
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
            ],
        };
        this.signupForm = this.formBuilder.group({
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
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            cpassword: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(30),
                Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
        });
    }
    ngOnInit() {
    }
    signup() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email, password, cpassword } = this;
            if (password != cpassword) {
                return console.error("Password did not match");
            }
            try {
                const res = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
                console.log("Successfully created account");
                this.navCtrl.navigateForward('/gender');
                const toast = yield this.toastController.create({
                    message: 'Your account has successfully created.',
                    duration: 2000
                });
                toast.present();
            }
            catch (error) {
                console.dir(error);
                // if(error.code == "auth/email-already-in-use") {
                //   console.log("Account already used.")
                //   const toast = await this.toastController.create({
                //   message: 'Account already used.',
                //   duration: 2000
                // });
                // toast.present();
                // }
            }
        });
    }
};
SignupPage = tslib_1.__decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.page.html',
        styleUrls: ['./signup.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth, NavController, ToastController,
        FormBuilder])
], SignupPage);
export { SignupPage };
//# sourceMappingURL=signup.page.js.map