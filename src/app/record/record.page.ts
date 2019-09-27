import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  signupForm: FormGroup;
 
  
  user: any;
  gender: string;
  dob: Date;
  age: number;
  weight: number;
  height: number;
  item: any;
  userEmail: string;

  constructor(
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingCtrl: LoadingController,
    private navCtrl: NavController,
  ) { 
  
  }

  
  ngOnInit() {
  
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      this.firebaseService.read_Users(data => {
 
        this.user = data.map(e => {
          return {
            id: e.payload.doc.id,
            // isEdit: false,
            gender: e.payload.doc.data()['gender'],
            // dob: e.payload.doc.data()['dob'],
            age: e.payload.doc.data()['age'],
            weight: e.payload.doc.data()['weight'],
            heigth: e.payload.doc.data()['height'],
           
          };
        })
        console.log(this.user);
   
      });
      this.userEmail = this.firebaseService.userDetails().email;

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

  EditRecord(record) {
    // record.isEdit = true;
    record.EditGender = record.gender;
    // record.EditDOB = record.dob;
    record.EditAge = record.age;
    record.EditWeight = record.weight;
    record.EditHeight = record.height;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['gender'] = recordRow.EditGender;
    // record['dob'] = recordRow.EditDOB;
    record['age'] = recordRow.EditAge;
    record['weight'] = recordRow.EditWeight;
    record['height'] = recordRow.EditHeight;
    this.firebaseService.update_User(recordRow.id, record);
    // recordRow.isEdit = false;
  }

  // UpdateRecord(record, recordRow) {
  //  record.UpdateGender = record.gender;
  //  record.UpdateAge = record.age;
  //  record.UpdateWeight = record.weight;
  //  record.UpdateHeight = record.height;
  //   this.firebaseService.update_User(recordRow.id, record);
  //   // recordRow.isEdit = false;
  // }



  async presentLoading(loading) {
    return await loading.present();
  }


}
