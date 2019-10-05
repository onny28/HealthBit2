import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController, NavParams } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFirestore, docChanges } from '@angular/fire/firestore';


@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  signupForm: FormGroup;
 
  aid: string;
  user: any;
  // gender: string;
  // dob: Date;
  // age: number;
  // weight: number;
  // height: number;
  userEmail: string;
  bmi: number;
  userInfo;
  loader: HTMLIonLoadingElement;
  loading: boolean;
  bmiValue: number;
  bmiMessage: string;

  constructor(
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private alertCtrl: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingCtrl: LoadingController,
    private navCtrl: NavController,
    public firestore: AngularFirestore,
  ) { 
    
  }

  
  ngOnInit() {
    
    // this.aid = this.activatedRoute.snapshot.paramMap.get("id");

    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      this.loadingFunction('Loading...')
      this.userEmail = this.firebaseService.userDetails().email;
      try{
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
          this.loaderDismiss();
          console.log(this.user);
        })
      }catch{

      }
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
    record.isEdit = true;
    record.EditRole = record.role;
    record.EditGender = record.gender;
    record.EditAge = record.age;
    record.EditWeight = record.weight;
    record.EditHeight = record.height;
  }

 
  UpdateRecord(recordRow) {
    let record = {};
    record['role'] = recordRow.EditRole;
    record['gender'] = recordRow.EditGender;
    // record['dob'] = recordRow.EditDOB;
    record['age'] = recordRow.EditAge;
    record['weight'] = recordRow.EditWeight;
    record['height'] = recordRow.EditHeight;
    this.firebaseService.update_User(recordRow.id, record);
    recordRow.isEdit = false;
  }

  calculateBMI() {
    let data = this.user["0"];
      if (data.weight > 0 && data.height > 0) {
        let finalBmi = data.weight  / (data.height / 100 * data.height / 100);
        this.bmiValue = parseFloat(finalBmi.toFixed(2));
        this.setBMIMessage();
      }  
  }
  
  // setBMIMessage will set the text message based on the value of BMI
  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiMessage = "Underweight"
    }
  
    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiMessage = "Normal"
    }
  
    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiMessage = "Overweight"
    }
  
    if (this.bmiValue > 30) {
      this.bmiMessage = "Obese"
    }
  }

}
 