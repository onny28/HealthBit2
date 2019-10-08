import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FormBuilder } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
let RecordPage = class RecordPage {
    constructor(toastCtrl, formBuilder, firebaseService, alertCtrl, route, router, loadingCtrl, navCtrl) {
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.firebaseService = firebaseService;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
            this.firebaseService.read_Users().subscribe(data => {
                this.user = data.map(e => {
                    return {
                        id: e.payload.doc.id,
                        isEdit: false,
                        gender: e.payload.doc.data()['gender'],
                        // dob: e.payload.doc.data()['dob'],
                        age: e.payload.doc.data()['age'],
                        weight: e.payload.doc.data()['weight'],
                        heigth: e.payload.doc.data()['height'],
                    };
                });
                console.log(this.user);
            });
            this.userEmail = this.firebaseService.userDetails().email;
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
    EditRecord(record) {
        record.isEdit = true;
        record.EditGender = record.gender;
        // record.EditDOB = record.dob;
        record.EditAge = record.age;
        record.EditWeight = record.weight;
        record.EditHeight = record.height;
    }
    // UpdateRecord(recordRow) {
    //   let record = {};
    //   record['gender'] = recordRow.EditGender;
    //   // record['dob'] = recordRow.EditDOB;
    //   record['age'] = recordRow.EditAge;
    //   record['weight'] = recordRow.EditWeight;
    //   record['height'] = recordRow.EditHeight;
    //   this.firebaseService.update_User(recordRow.id, record);
    //   recordRow.isEdit = false;
    // }
    UpdateRecord(record, recordRow) {
        record.isUpdate = true;
        record.UpdateGender = record.gender;
        record.UpdateAge = record.age;
        record.UpdateWeight = record.weight;
        record.UpdateHeight = record.height;
        this.firebaseService.update_User(recordRow.id, record);
        // recordRow.isEdit = false;
    }
    presentLoading(loading) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield loading.present();
        });
    }
};
RecordPage = tslib_1.__decorate([
    Component({
        selector: 'app-record',
        templateUrl: './record.page.html',
        styleUrls: ['./record.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ToastController,
        FormBuilder,
        FirebaseService,
        AlertController,
        ActivatedRoute,
        Router,
        LoadingController,
        NavController])
], RecordPage);
export { RecordPage };
//# sourceMappingURL=record.page.js.map