import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navCtrl: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    db: AngularFirestore

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       this.navCtrl.setRoot('home'); //to the page where user navigates after login
//       // User is signed in.q
//     } else {
//       this.navCtrl.setRoot(LoginPage); // to the login page as user is not logged in
//       // No user is signed in.
//     }
//   });
 }
