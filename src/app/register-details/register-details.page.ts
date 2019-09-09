import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NavController, ToastController, LoadingController } from '@ionic/angular'
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.page.html',
  styleUrls: ['./register-details.page.scss'],
})
export class RegisterDetailsPage implements OnInit {
  
  user: any;
  username: string;
  gender: string;
  dob: string;
  weight: number;
  height: number;

  registerForm: FormGroup;
  isActiveToggleTextPassword: Boolean = true;

  error_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minLength', message: 'Username must at least 6 characters' },
      { type: 'maxLength', message: 'Username must not over than 10 characters' },
      { type: 'pattern', message: 'Enter a valid username' },
    ],
    'gender': [
      { type: 'required', message: 'Gender is required' },
      { type: 'pattern', message: 'Enter male or female only' }
    ],
    'dob': [
      { type: 'required', message: 'Date of Birth is required' },
      { type: 'pattern', message: 'Must in dd/MM/yyyy format' },
      { type: 'pattern', message: 'The year must between 1960 and 2004' }
    ],
    'weight': [
      { type: 'required', message: 'Weight is required' },
      { type: 'pattern', message: 'Weight must be between 30 and 300 only' },
      { type: 'pattern', message: 'Weight must in Kilogram(kg) format' }
    ],
    'height': [
      { type: 'required', message: 'Height is required' },
      { type: 'pattern', message: 'Height must be between 30 and 300 only' },
      { type: 'pattern', message: 'Height must in Centimeter(cm) format' }
    ],
  }

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private firebaseService: FirebaseService,
    public router: Router,
    public route: ActivatedRoute,
  ) { 
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^male$|^female$')
      ])),
      dob: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)(19[6789][0-9]|20[0][0-4]|2004)$')
      ])),
      weight: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('([3-8][0-9]|9[0-9]|[12][0-9]{2}|300)')
      ])),
      height: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('([3-8][0-9]|9[0-9]|[12][0-9]{2}|300)')
      ])),
    })

  }

  ngOnInit() {
    this.firebaseService.read_Users().subscribe(data => {
 
      this.user = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          username: e.payload.doc.data()['username'],
          gender: e.payload.doc.data()['gender'],
          dob: e.payload.doc.data()['dob'],
          weight: e.payload.doc.data()['weight'],
          heigth: e.payload.doc.data()['height'],
        };
      })
      console.log(this.user);
 
    });
  }

  //For show/hide user password
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  CreateRecord() {
    let record = {};
    record['username'] = this.username;
    record['gender'] = this.gender;
    record['dob'] = this.dob;
    record['weight'] = this.weight;
    record['height'] = this.height;
    this.firebaseService.create_NewUser(record).then(resp => {
      this.username = "";
      this.gender = "";
      this.dob = "";
      this.weight = undefined;
      this.height = undefined;
      console.log(resp);
      this.navCtrl.navigateForward('/tabs/tabs/home')
    })
      .catch(error => {
        console.dir(error);

      });
  }

  // RemoveRecord(rowID) {
  //   this.firebaseService.delete_User(rowID);
  // }

  // EditRecord(record) {
  //   record.isEdit = true;
  //   record.EditUsername = record.username;
  //   record.EditPassword = record.password;
  //   record.EditGender = record.gender;
  //   record.EditDOB = record.dob;
  //   record.EditWeigth = record.weight;
  //   record.EditHeight = record.height;
  // }

  // UpdateRecord(recordRow) {
  //   let record = {};
  //   record['username'] = recordRow.EditUsername;
  //   record['password'] = recordRow.EditPassword;
  //   record['gender'] = recordRow.EditGender;
  //   record['dob'] = recordRow.EditDOB;
  //   record['weight'] = recordRow.EditWeight;
  //   record['height'] = recordRow.EditHeight;
  //   this.firebaseService.update_User(recordRow.id, record);
  //   recordRow.isEdit = false;
  // }


}
