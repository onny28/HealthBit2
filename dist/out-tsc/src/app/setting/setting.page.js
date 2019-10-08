import * as tslib_1 from "tslib";
import { Component, Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';
let SettingPage = class SettingPage {
    constructor(fcm, plt) {
        this.fcm = fcm;
        this.plt = plt;
        this.pushes = [];
        this.plt.ready()
            .then(() => {
            this.fcm.onNotification().subscribe(data => {
                if (data.wasTapped) {
                    console.log("Received in background");
                }
                else {
                    console.log("Received in foreground");
                }
                ;
            });
            this.fcm.onTokenRefresh().subscribe(token => {
                // Register your new token in your back-end if you want
                // backend.registerToken(token);
            });
        });
    }
    subscribeToTopic() {
        this.fcm.subscribeToTopic('enappd');
    }
    getToken() {
        this.fcm.getToken().then(token => {
            // Register your new token in your back-end if you want
            // backend.registerToken(token);
        });
    }
    unsubscribeFromTopic() {
        this.fcm.unsubscribeFromTopic('enappd');
    }
};
SettingPage = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    Component({
        selector: 'app-home',
        templateUrl: 'setting.page.html',
        styleUrls: ['setting.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FCM, Platform])
], SettingPage);
export { SettingPage };
//# sourceMappingURL=setting.page.js.map