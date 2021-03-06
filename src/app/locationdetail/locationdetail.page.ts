import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { FirebaseService } from 'app/firebase.service';
import { NavController, LoadingController } from '@ionic/angular';
import { Subject, Observable, combineLatest } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';



@Component({
  selector: 'app-locationdetail',
  templateUrl: './locationdetail.page.html',
  styleUrls: ['./locationdetail.page.scss'],
})
export class LocationdetailPage implements OnInit {
  filterText: string;
  location;
  loader: HTMLIonLoadingElement;
  loading: boolean;

  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public firestore: AngularFirestore,
  ) { }

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
              description: e.payload.doc.data()['description'],
              menu: e.payload.doc.data()['menu'],
              latitude: e.payload.doc.data()['latitude'],
              longitude: e.payload.doc.data()['longitude'],
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

EditLocation(data) {
  data.isEdit = true;
  data.EditLocationName = data.locationName;
  data.EditAddress = data.address;
}

getLocationName() {
  var filterText;
  return this.firestore.collection('/locationN', ref => ref.where("locationName", "==", filterText )).valueChanges();
  };

}
