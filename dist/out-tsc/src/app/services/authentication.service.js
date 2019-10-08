import * as tslib_1 from "tslib";
import { Injectable, NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
let AuthenticationService = class AuthenticationService {
    constructor() { }
    signup(email, password) {
        throw new Error("Method not implemented.");
    }
    registerUser(value) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then(res => resolve(res), err => reject(err));
        });
    }
    loginUser(value) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then(res => resolve(res), err => reject(err));
        });
    }
    logoutUser() {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut()
                    .then(() => {
                    console.log("LOG Out");
                    resolve();
                }).catch((error) => {
                    reject();
                });
            }
        });
    }
    userDetails() {
        return firebase.auth().currentUser;
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    NgModule({}),
    tslib_1.__metadata("design:paramtypes", [])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map