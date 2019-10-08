import { Component } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
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
    public actionSheetController: ActionSheetController
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

  removeData(rowID){
  
  }

  deleteAcc(rowID){
    this.firebaseService.delete_userData(rowID);
    console.log("user data was successfully deleted");
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      // User deleted.
      console.log("Account deleted!")
    }).catch(function(error) {
      // An error happened.
      console.log("There is error happened when you try to delete your account")
    });
  }
 

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu',
      buttons: [{
        text: 'Logout',
        role: 'logout',
        icon: 'exit',
        handler: () => {
          this.logout();
          console.log('Logout');
        }
      }, {
        text: 'Delete Account',
        role: 'delete',
        icon: 'trash',
        handler: () => {
          this.deleteAcc(rowID);
          console.log('Account deleted');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
    });
    await actionSheet.present();
  }
 

  

}


