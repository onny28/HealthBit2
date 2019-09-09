import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import {NavController, ToastController} from '@ionic/angular'
import { LoadingController } from '@ionic/angular';


import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loading: any;
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

  constructor(
    public afAuth: AngularFireAuth, 
    private navCtrl: NavController, 
    private toastController: ToastController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    ) { 

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
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
      })
    }

  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Connecting ...'
    });
  }

  async presentLoading(loading) {
    await loading.present();
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
    try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
        console.log("You have successfully login")
        this.navCtrl.navigateForward('/tabs/tabs/home')
        const toast = await this.toastController.create({
          message: 'Successful',
          duration: 2000
        });
        toast.present();
    } catch(err) {
        console.dir(err)
        if(err.code == "auth/user-not-found") {
          console.log("User not found")
          const toast = await this.toastController.create({
            message: 'User not found',
            duration: 2000
          });
          toast.present();
        } debugger
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

}
