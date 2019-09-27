import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, db) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        AngularFirestore])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map