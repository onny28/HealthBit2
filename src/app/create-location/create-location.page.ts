import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.page.html',
  styleUrls: ['./create-location.page.scss'],
})
export class CreateLocationPage implements OnInit {

  locationName: string;
  address: string;
  locationForm: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
  ) { 
  
  }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      
    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }
  }

  CreateLocation() {
    let data = {};
    data['locationName'] = this.locationName;
    data['address'] = this.address;
    this.firebaseService.create_location(data).then(resp => {
      this.locationName = "";
      this.address = "";
      console.log(resp);
      this.navCtrl.navigateBack('/adminpage')
    })
      .catch(error => {
        console.dir(error);
      });
  }

}
