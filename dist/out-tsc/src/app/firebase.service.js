import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
let FirebaseService = class FirebaseService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    create_NewUser(record) {
        return this.firestore.collection('UserDetails').add(record);
    }
    read_Users() {
        return this.firestore.collection('UserDetails').snapshotChanges();
    }
    update_User(recordID, record) {
        this.firestore.doc('UserDetails/' + recordID).update(record);
    }
    delete_User(record_id) {
        this.firestore.doc('UserDetails/' + record_id).delete();
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
FirebaseService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], FirebaseService);
export { FirebaseService };
//# sourceMappingURL=firebase.service.js.map