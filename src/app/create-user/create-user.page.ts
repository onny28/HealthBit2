import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from 'app/firebase.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { NavController, LoadingController, ToastController } from '@ionic/angular'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
  uid;
  email: string;
  password: string;
  cpassword: string;
  createForm: FormGroup;
  gender: string;
  age: number;
  weight: number;
  height: number;
  role: string;
  userEmail: string;
  userID: string;
  isActiveToggleTextPassword: Boolean = true;

  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'cpassword': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
      { type: 'pattern', message: 'Your password can contain characters, numbers and symbol' }
    ],
    'role': [
      { type: 'required', message: 'Role is required' },
      { type: 'pattern', message: 'Enter admin or user only' }
    ],
    'gender': [
      { type: 'required', message: 'Gender is required' },
      { type: 'pattern', message: 'Enter male or female only' }
    ],
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
  loader: HTMLIonLoadingElement;
  loading: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
  ) {
    this.createForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.minLength(6),
        // Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9?=.*-_!#$%&@+]+$')
      ])),
      cpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9?=.*-_!#$%&@+]+$')
      ])),
      role: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required,
      ])),
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

  async loaderDismiss() {
    this.loading = await this.loadingCtrl.dismiss();
  }
  //For show/hide user password
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  async CreateRecord() {
    const { email, password } = this
    this.loadingFunction('Loading...')
    try {
      debugger;
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      var authid = firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {  
        data.user.uid;
     })
      let record = {};
      record['authid'] = authid;
      record['email'] = email;
      record['role'] = this.role;
      record['gender'] = this.gender;
      record['age'] = this.age;
      record['weight'] = this.weight;
      record['height'] = this.height;
      this.firebaseService.create_NewUser(record).then(resp => {
        authid;
        email;
        this.role;
        this.gender = "";
        this.age = undefined;
        this.weight = undefined;
        this.height = undefined;
        console.log(resp);
      })
      this.navCtrl.navigateForward('/adminpage')
        .catch(error => {
          console.dir(error);
        });

        this.loaderDismiss();
        console.log("Successfully created account")
        const toast = await this.toastController.create({
          message: 'Your account has successfully created.',
          duration: 2000
        });
        toast.present();
    } catch (error) {
      this.loaderDismiss();
      console.dir(error)
      if (error.code == "auth/email-already-in-use") {
        console.log("Account already used.")
        const toast = await this.toastController.create({
          message: 'Account already used.',
          duration: 2000,
        });
        toast.present();
      }


    }

  }
}
