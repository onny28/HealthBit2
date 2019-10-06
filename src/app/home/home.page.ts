import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;
 

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
  ) {}
  
  ngOnInit() {
  var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }

  }


  logout(){
    this.firebaseService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }

}
