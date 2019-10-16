import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'app/firebase.service';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-addgrocerylist',
  templateUrl: './addgrocerylist.page.html',
  styleUrls: ['./addgrocerylist.page.scss'],
})
export class AddgrocerylistPage implements OnInit {
   name: string;
   price: number;
   userEmail: string;
   userID: string;
   loader: HTMLIonLoadingElement;
   loading: boolean;

  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,) { }

  ngOnInit() {
    // var user = firebase.auth().currentUser;
    // if (user) {
    //   // User is signed in.
    //   this.loadingFunction('Loading...')
    //   try{  
    this.userEmail = this.firebaseService.userDetails().email;
    this.userID = this.firebaseService.userDetails().uid;
  }

  CreateGroceryList(){
    let data= {};
    data['name'] = this.name;
    data['price'] = this.price;
    data['authid'] = this.userID;
    data['email'] = this.userEmail;
    this.firebaseService.create_grocerylist(data).then(resp =>{
      this.name = "";
      this.price = undefined;
      this.userID;
      this.userEmail;
      console.log(resp);
      this.navCtrl.navigateBack('/tabs/tabs/grocerylist')
    })
      .catch(error => {
        console.dir(error);
      });
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


}


