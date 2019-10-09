import { Component, Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { SettingsService } from 'app/settings.service';
import { Platform, NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseService } from 'app/firebase.service';

@Injectable ({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: 'setting.page.html',
  styleUrls: ['setting.page.scss'],
})
export class SettingPage {
  pushes: any = [];
  user;
  constructor(private fcm: FCM, public plt: Platform, private theme: SettingsService, private firebaseService: FirebaseService,
    private navCtrl: NavController,) {
  
    this.plt.ready()
      .then(() => {
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
          } else {
            console.log("Received in foreground");
          };
        });

        this.fcm.onTokenRefresh().subscribe(token => {
          // Register your new token in your back-end if you want
          // backend.registerToken(token);
        });
      })
  }

  ngOnInit() {
    //this.loadMap();

  var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      this.firebaseService.read_User().subscribe(data =>{
        this.user = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            role: e.payload.doc.data()['role'],
            gender: e.payload.doc.data()['gender'],
            age: e.payload.doc.data()['age'],
            weight: e.payload.doc.data()['weight'],
            height: e.payload.doc.data()['height'],
          };
        })
        console.log(this.user);
      })
    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }
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

  enableDark(){
    this.theme.enableDark();
  }

  enableLight(){
    this.theme.enableLight();
  }

  removeData(rowID){
  
    this.firebaseService.delete_userData(rowID);
      console.log("data deleted");
  }

  deleteAcc(){
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      // User deleted.
      console.log("Account deleted!")
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    });
  }
}