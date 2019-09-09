import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  signupForm: FormGroup;
 
  
  users: any;
  username: string;
  gender: string;
  dob: string;
  weight: number;
  height: number;
  item: any;

  constructor(
    public toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    public loadingCtrl: LoadingController,
    private navCtrl: NavController,
  ) { }

  
  ngOnInit() {
  
   

    this.firebaseService.read_Users().subscribe(data => {

      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          username: e.payload.doc.data()['username'],
          password: e.payload.doc.data()['password'],
          gender: e.payload.doc.data()['gender'],
          dob: e.payload.doc.data()['dob'],
          weight: e.payload.doc.data()['weight'],
          height: e.payload.doc.data()['height'],
        };
      })
      console.log(this.users);

    });
   
  }
  
  // logout(){
  //   this.authService.logoutUser()
  //   .then(res => {
  //     console.log(res);
  //     this.navCtrl.navigateBack('');
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }

  // CreateRecord() {
  //   let record = {};
  //   record['email'] = this.email;
  //   record['gender'] = this.gender;
  //   record['dob'] = this.dob;
  //   record['weight'] = this.weight;
  //   record['height'] = this.height;
  //   this.firebaseService.create_NewUser(record).then(resp => {
  //     this.email = "";
  //     this.gender = "";
  //     this.dob = "";
  //     this.weight = undefined;
  //     this.height = undefined;
  //     console.log(resp);
  //   })
  //     .catch(error => {
  //       console.dir(error);

  //     });
  // }
 
  // RemoveRecord(rowID) {
  //   this.firebaseService.delete_User(rowID);
  // }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditUsername = record.username;
    record.EditGender = record.gender;
    record.EditDOB = record.dob;
    record.EditWeight = record.weight;
    record.EditHeight = record.height;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['username'] = recordRow.EditUsername;
    record['gender'] = recordRow.EditGender;
    record['dob'] = recordRow.EditDOB;
    record['weight'] = recordRow.EditWeight;
    record['height'] = recordRow.EditHeight;
    this.firebaseService.update_User(recordRow.id, record);
    recordRow.isEdit = false;
  }



  async presentLoading(loading) {
    return await loading.present();
  }


}
