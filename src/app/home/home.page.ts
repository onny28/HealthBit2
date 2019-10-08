<<<<<<< HEAD
import { Component } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
=======
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
>>>>>>> f9f28305160ecc24e283649ae01bd1bbd1bfa2bb
import { FirebaseService } from '../firebase.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';



<<<<<<< HEAD
=======
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

//declare var google; //

>>>>>>> f9f28305160ecc24e283649ae01bd1bbd1bfa2bb
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any;

  
 //@ViewChild('map') mapElement: ElementRef; //
  //map: any; //
  //address:string;  //

  constructor(
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    public actionSheetController: ActionSheetController
    //private geolocation: Geolocation, //
    //private nativeGeocoder: NativeGeocoder
  ) {}
  
  ngOnInit() {
    //this.loadMap();

  var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }
  }

  // loadMap() {
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
  //     let mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }
 
  //     this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
 
  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  //     this.map.addListener('tilesloaded', () => {
  //       console.log('accuracy',this.map);
  //       this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
  //     });
 
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }
 
  // getAddressFromCoords(lattitude, longitude) {
  //   console.log("getAddressFromCoords "+lattitude+" "+longitude);
  //   let options: NativeGeocoderOptions = {
  //     useLocale: true,
  //     maxResults: 5
  //   };
 
  //   this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
  //     .then((result: NativeGeocoderReverseResult[]) => {
  //       this.address = "";
  //       let responseAddress = [];
  //       for (let [key, value] of Object.entries(result[0])) {
  //         if(value.length>0)
  //         responseAddress.push(value);
 
  //       }
  //       responseAddress.reverse();
  //       for (let value of responseAddress) {
  //         this.address += value+", ";
  //       }
  //       this.address = this.address.slice(0, -2);
  //     })
  //     .catch((error: any) =>{ 
  //       this.address = "Address Not Available!";
  //     });
 
 // }

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


