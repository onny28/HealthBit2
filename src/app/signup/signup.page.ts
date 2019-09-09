import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular'
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../firebase.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { AuthenticationService } from '../services/authentication.service'




@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  email: string;
  password: string;
  cpassword: string;
  public loading: any;
  signupForm: FormGroup;
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
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
  }
  errorMessage: string;
  successMessage: string;

  constructor(
    public afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public router: Router,
    public route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private authService: AuthenticationService,
  
  ) {



    this.signupForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      cpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
    })
  }



  ngOnInit() {

  }

//For show/hide user password
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  

  async signup(): Promise<any>{
   
    const { email, password, cpassword } = this
    if (password != cpassword) {
      return console.error("Password did not match")
    }

    try {
      return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (newUserCredential: firebase.auth.UserCredential) => {
      firebase
        .firestore()
        .doc(`/userProfile/${newUserCredential.user.uid}`)
        .set({ email , password });
        console.log("Successfully created account")
      this.navCtrl.navigateForward('register-details/:id')
      const toast = await this.toastController.create({
        message: 'Your account has successfully created.',
        duration: 2000
      });
      toast.present();
    })
      // const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      // console.log("Successfully created account")
      // this.navCtrl.navigateForward('register-details/:id')
      // const toast = await this.toastController.create({
      //   message: 'Your account has successfully created.',
      //   duration: 2000
      // });
      // toast.present();
    } catch (error) {
      console.dir(error)
      if (error.code == "auth/email-already-in-use") {
        console.log("Account already used.")
        const toast = await this.toastController.create({
          message: 'Account already used.',
          duration: 2000,
        });
        toast.present();
      }
      if(error.code == "Uncaught (in promise): Error: The email address is already in use by another account."){
        console.log("Account already used.")
        const toast = await this.toastController.create({
          message: 'Account already used.',
          duration: 2000,
          animated: true,
          showCloseButton: true,
          closeButtonText: "OK",
          position: "middle",
        });
        toast.present();
      }
    }

  }

  tryRegister(value){
    this.authService.registerUser(value)
     .then(res => {
       console.log(res);
       this.errorMessage = "Already register";
       this.successMessage = "Your account has been created. Please log in.";
     }, err => {
       console.log(err);
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }
 
  goLoginPage(){
    this.navCtrl.navigateBack('/login');
  }

}



