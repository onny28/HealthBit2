import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseService } from 'app/firebase.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  
  // zoom = 10;
  // public lat = 4.94029;
  // public lng = 114.94806;
  // public latitude = 4.881334;
  // public longitude: 114.9485032;
  // public markerUrl = '../../assets/icon/marker.png';
  //<div>Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
  // public origin: any;


  // constructor(public geolocation: Geolocation,) {
    
  // }

  title: string = 'My first AGM project';
  // lat: number = 4.94029;
  // lng: number = 114.94806;
  height = 0;
  location;
  loader: HTMLIonLoadingElement;
  loading: boolean;

  constructor(
    public platform: Platform,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    ){
    console.log(platform.height());
    this.height = platform.height() - 56;
  }
  

  ngOnInit() {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      this.loadingFunction('Loading...')

        this.firebaseService.read_location().subscribe(data => {
   
          this.location= data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              locationName: e.payload.doc.data()['locationName'],
              address: e.payload.doc.data()['address'],
              latitude: e.payload.doc.data()['latitude'],
              longitude: e.payload.doc.data()['longitude'],
              lat: parseFloat(e.payload.doc.data()['latitude']),
              lng: parseFloat(e.payload.doc.data()['longitude'])
            };
          })
          this.loaderDismiss();
          console.log(this.location);
        });
      
    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }
  }

  async loadingFunction(loadmsg) {
    this.loader = await this.loadingCtrl.create({
      message: loadmsg
    })
    await this.loader.present();
  }
  
  async loaderDismiss(){
   this.loading = await this.loadingCtrl.dismiss();
  }
//     this.getDirection();
//     this.getSecondDirection();
//     console.log('ngonit');
//   }

//   mapReady(a, event){
//     if(event)
// {
//   console.log('event if');
// } 
//   } 
  
//   getDirection(){
//     console.log('directions');
//     this.origin = { lat:26.857114, lng: 75.8127086};
//     console.log('origin', this.origin);
//   }

//   getSecondDirection(){
//     console.log('directions');
//     this.origin = { lat:4.881334, lng: 114.9485032};
//     console.log('origin', this.origin);
//   }
}
