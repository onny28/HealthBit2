import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';

//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

//declare var google; //

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

}
