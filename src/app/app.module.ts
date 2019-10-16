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
import { FirebaseService } from './firebase.service';
import { FCM } from '@ionic-native/fcm/ngx';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { NO_ERRORS_SCHEMA} from '@angular/core';
@NgModule({
  declarations: [AppComponent],
  // Schema: [NO_ERRORS_SCHEMA],

  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, IonicModule.forRoot(), 
    AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule, AngularFireAuthModule, AngularFirestoreModule,
    AngularFireDatabaseModule, AngularFireStorageModule, 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMV9-prim4tPhS_fKyWy3SC1owNWc-hh4'
    }),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    FCM,
    Firebase,
    Geolocation,
    // NativeGeocoder,
    //Geolocation,
    //NativeGeocoder,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ,{ provide: FirestoreSettingsToken, useValue: {} }
     ,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    , { provide: FirestoreSettingsToken, useValue: {} }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
