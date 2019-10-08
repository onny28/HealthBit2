import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import {NavController, ToastController, AlertController} from '@ionic/angular'
import { LoadingController } from '@ionic/angular';
import {RegisterDetailsPage} from '../register-details/register-details.page'


import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email: string = ""
  password: string = ""
  errorMessage: string = '';

  isActiveToggleTextPassword: Boolean = true;

  validations_form: FormGroup;
  
  
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
  }
  loader: HTMLIonLoadingElement;
  loading: boolean;
  
  

  constructor(
    public afAuth: AngularFireAuth, 
    private navCtrl: NavController, 
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertController: AlertController,
    public firestore: AngularFirestore,
    ) { 

      // var currentuser = firebase.auth().currentUser;
      // var authID = currentuser.uid;
      // var sama = this.firestore.collection('users', ref => ref.where("authid", "==", authID))
      
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log('logged in');
          return navCtrl.navigateForward('/tabs/tabs/home')
        } else {
          // No user is signed in.
          return navCtrl.navigateForward('/login')
        }
      });

      this.validations_form = this.formBuilder.group({
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
          Validators.pattern('^[a-zA-Z0-9?=.*-_!#$%&@+]+$')
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
      })
    }

  async ngOnInit() {

    
    
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
  

  //For show/hide user password
  public toggleTextPassword(): void {
    this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword == true) ? false : true;
  }
  public getType() {
    return this.isActiveToggleTextPassword ? 'password' : 'text';
  }

  async login() {

    if(this.email=="") {
      const toast = await this.toastController.create({
        message: 'Email can not be empty',
        duration: 2000
      });
      toast.present();
    }else if(this.password==""){
      const toast = await this.toastController.create({
        message: 'Password can not be empty',
        duration: 2000
      });
      toast.present();
    }

    const { email, password } = this
    this.loadingFunction('Loading...')
    
    try {
      // return this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      // .then( async () => {
      //   const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      //   console.log("You have successfully login")
      //   this.navCtrl.navigateForward('/tabs/tabs/home')
      //   const toast = await this.toastController.create({
      //     message: 'Successful',
      //     duration: 2000
      //   });
      //   toast.present();
      // })
        const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
        
        this.loaderDismiss();
        console.log("You have successfully login")
        this.navCtrl.navigateForward('/tabs/tabs/home')
        const toast = await this.toastController.create({
          message: 'Successful',
          duration: 2000
        });
        toast.present();
    } catch(err) {
      this.loaderDismiss();
        console.dir(err)
        if(err.code == "auth/user-not-found") {
          console.log("User not found")
          const toast = await this.toastController.create({
            message: 'User not found',
            duration: 2000
          });
          toast.present();
        } 
        if(err.code == "auth/wrong-password") {
          console.log("wrong password")
          const toast = await this.toastController.create({
            message: 'Wrong password.',
            duration: 2000
          });
          toast.present();
        } 
    }
  }

 
  goToRegisterPage(){
      this.navCtrl.navigateForward('/signup');
  }

  async forgetPassword(){
    try{
      if(this.email=="") {
        const toast = await this.toastController.create({
          message: 'Email can not be empty',
          duration: 2000
        });
        toast.present();
      }else{
        this.afAuth.auth.sendPasswordResetEmail(this.email)
        const alert = await this.alertController.create({
          header: 'Reset Password',
          message: 'Check Your Email Account to Reset Your Password',
          buttons: ['OK']
        });
    
        await alert.present();
      }
    }catch(error){
      if(error.code == "auth/invalid-email"){
        console.log("email invalid")
        const toast = await this.toastController.create({
          message: 'email invalid',
          duration: 2000
        });
        toast.present();
      }
      if(error.code == "auth/user-not-found"){
        console.log("Account did not exists")
        const toast = await this.toastController.create({
          message: 'Account did not exists"',
          duration: 2000
        });
        toast.present();
      }
    }
    
  }

    

}
