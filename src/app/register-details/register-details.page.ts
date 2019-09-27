import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NavController, LoadingController } from '@ionic/angular'
import { Validators, FormBuilder, FormGroup, FormControl, PatternValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.page.html', 
  styleUrls: ['./register-details.page.scss'],
})
export class RegisterDetailsPage implements OnInit {
  // date = new Date();  
  // maxDate = (new Date().getFullYear()).toString()+"/0"+(new Date().getMonth()+1).toString()+"/"+(new Date().getDate()).toString();
  
  // user: any;
  gender: string;
  // dob: Date;
  age: number;
  weight: number;
  height: number;
  userEmail: string;
  userID: string;

  registerForm: FormGroup;
  isActiveToggleTextPassword: Boolean = true;

  error_messages = {
    'gender': [
      { type: 'required', message: 'Gender is required' },
      { type: 'pattern', message: 'Enter male or female only' }
    ],
    // 'dob': [
    //   { type: 'required', message: 'Date of Birth is required' },
    //   { type: 'pattern', message: 'Must in dd/MM/yyyy format' },
    //   { type: 'pattern', message: 'The year must between 1960 and 2004' }
    // ],
    'age': [
      { type: 'required', message: 'Age is required' },
      { type: 'pattern', message: 'Age must follow current year' },
      { type: 'pattern', message: 'The age must be between 11 and 60 years old' }
    ],
    'weight': [
      { type: 'required', message: 'Weight is required' },
      { type: 'pattern', message: 'Weight must be between 30 and 300 only' },
      { type: 'pattern', message: 'Weight can be in 1 decimal places' },
      { type: 'pattern', message: 'Weight must in Kilogram(kg) format' }
    ],
    'height': [
      { type: 'required', message: 'Height is required' },
      { type: 'pattern', message: 'Height must be whole number between 30 and 300 only' },
      { type: 'pattern', message: 'Height must in Centimeter(cm) format' }
    ],
  }
  
 
 
 
  

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private firebaseService: FirebaseService,
    public router: Router,
    public route: ActivatedRoute,
  ) { 
    // console.log(this.maxDate)

    this.registerForm = this.formBuilder.group({
      gender: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^male$|^female$')
      ])),
      // dob: new FormControl('', Validators.compose([
      //   Validators.required,
      //   // Validators.pattern('^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)(19[6789][0-9]|20[0][0-4]|2004)$')
      // ])),
      age: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('(1[1-9]|[2-5][0-9]|60)')
      ])),
      weight: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('((([3-8][0-9]|9[0-9]|[12][0-9]{2}|299)+.[0-9])|([3-8][0-9]|9[0-9]|[12][0-9]{2}|300))')
      ])),
      height: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('([3-8][0-9]|9[0-9]|[12][0-9]{2}|300)')
      ])),
    })
    
  }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      this.userID = this.firebaseService.userDetails().uid;
      this.userEmail = this.firebaseService.userDetails().email;

    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }
  }

  // dateChange(event){
  //   console.log(event);
  // }

  
  //For show/hide user password
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  CreateRecord() {
    let record = {};
    record['authid'] = this.userID;
    record['email'] = this.userEmail;
    record['gender'] = this.gender;
    // record['dob'] = this.dob;
    record['age'] = this.age;
    record['weight'] = this.weight;
    record['height'] = this.height;
    this.firebaseService.create_NewUser(record).then(resp => {
      this.userID;
      this.userEmail;
      this.gender = "";
      // this.dob = undefined;
      this.age = undefined;
      this.weight = undefined;
      this.height = undefined;
      console.log(resp);
      this.navCtrl.navigateForward('/tabs/tabs/home')
    })
      .catch(error => {
        console.dir(error);

      });
  }

}
