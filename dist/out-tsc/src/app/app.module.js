import * as tslib_1 from "tslib";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthenticationService } from './services/authentication.service';
import { FirebaseService } from './firebase.service';
import { FCM } from '@ionic-native/fcm/ngx';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent],
        entryComponents: [],
        imports: [
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireModule,
            AngularFireAuthModule,
            AngularFirestoreModule,
            AngularFireDatabaseModule,
            AngularFireStorageModule,
            AuthenticationService,
        ],
        providers: [
            StatusBar,
            SplashScreen,
            FirebaseService,
            FCM,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            { provide: FirestoreSettingsToken, useValue: {} }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map