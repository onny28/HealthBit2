import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

import { environment } from '../environments/environment';
import firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthenticationService } from './services/authentication.service'
import { FirebaseService } from './firebase.service';
import { FCM } from '@ionic-native/fcm/ngx';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot(), 
    AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule, AngularFireAuthModule, AngularFirestoreModule,
    AngularFireDatabaseModule, AngularFireStorageModule, AuthenticationService,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    FCM,
    //Geolocation,
    //NativeGeocoder,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ,{ provide: FirestoreSettingsToken, useValue: {} }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
