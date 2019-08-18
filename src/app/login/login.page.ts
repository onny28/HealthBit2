import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import {NavController, ToastController} from '@ionic/angular'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""
  

  constructor(public afAuth: AngularFireAuth, private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
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
        this.navCtrl.navigateForward('/home')
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

}
