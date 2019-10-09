import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { NavController, ToastController, LoadingController, AlertController } from '@ionic/angular'
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { FirebaseService } from '../firebase.service';



import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// import { AuthenticationService } from '../services/authentication.service'




@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {

  email: string;
  password: string;
  cpassword: string;
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
      { type: 'pattern', message: 'Your password can contain characters, numbers and symbol' }
    ],
  }
  errorMessage: string;
  successMessage: string;
  loader: HTMLIonLoadingElement;
  loading: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public router: Router,
    public route: ActivatedRoute,
    // private firebaseService: FirebaseService,
    // private authService: AuthenticationService,
    public alertController: AlertController,
  ) {



    this.signupForm = this.formBuilder.group({
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
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9?=.*-_!#$%&]+$')
      ])),
      cpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z0-9?=.*-_!#$%&@+]+$')
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
    })
  }



  ngOnInit() {

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

  

  async signup(): Promise<any>{
   
   
   try{
    const { email, password, cpassword } = this
    if (password != cpassword) {
      console.error("Password did not match")
      const toast = await this.toastController.create({
        message: 'Password did not match',
        duration: 2000,
      });
      toast.present();
    }
    else {
    //   return firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(async (newUserCredential: firebase.auth.UserCredential) => {
    //   firebase
    //     .firestore()
    //     .doc(`/userProfile/${newUserCredential.user.uid}`)
    //     .set({ email , password });
    //     console.log("Successfully created account")
    //   this.navCtrl.navigateForward('register-details/:id')
    //   const toast = await this.toastController.create({
    //     message: 'Your account has successfully created.',
    //     duration: 2000
    //   });
    //   toast.present();
    // })
     this.loadingFunction('Loading...');
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      // .then (async (newUserCredential: firebase.auth.UserCredential) => {
      //     firebase
      //       .firestore()
      //       .doc(`/userProfile/${newUserCredential.user.uid}`)
      //       .set({ email , password });
      //     });
      this.loaderDismiss();
      console.log("Successfully created account")
      this.navCtrl.navigateForward('register-details/:id')
      const toast = await this.toastController.create({
        message: 'Your account has successfully created.',
        duration: 2000
      });
      toast.present();
    } 
    }catch (error) {
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

  // tryRegister(value){
  //   this.authService.registerUser(value)
  //    .then(res => {
  //      console.log(res);
  //      this.errorMessage = "Already register";
  //      this.successMessage = "Your account has been created. Please log in.";
  //    }, err => {
  //      console.log(err);
  //      this.errorMessage = err.message;
  //      this.successMessage = "";
  //    })
  // }
 
  goLoginPage(){
    this.navCtrl.navigateBack('/login');
  }

}



