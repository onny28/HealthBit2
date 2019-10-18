import { Component, OnInit } from '@angular/core';

import { IdeaService, Idea } from 'app/services/idea.service';
import { CartService } from 'app/cart.service';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { NavController, LoadingController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.page.html',
  styleUrls: ['./grocerylist.page.scss'],
})
export class GrocerylistPage implements OnInit {

  // text = 'check this out'
  // url = 'https://'
  items;
  grocery;
  loader: HTMLIonLoadingElement;
  loading: boolean;
  idea: Idea = {
    name: '',
    notes: '',
    steps:'',
    ingredients: [ {
      "name" : "testing",
      "price" : null, }
    ],
    calories: null,
    video: '',
    };
   

  selectedItems = [];
  totalPrice = 0;
  constructor(private cartService: CartService, 
    // private socialSharing: SocialSharing,
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    public loadingCtrl: LoadingController,
    ) {

  }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      this.loadingFunction('Loading...')
      try{  
        
        this.firebaseService. readGrocerylist().subscribe(data =>{
          this.grocery = data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              name: e.payload.doc.data()['name'],
              price: e.payload.doc.data()['price'],
              email: e.payload.doc.data()['email'],
              authid: e.payload.doc.data()['authid'],
            
            };
         
          })   
        
          this.loaderDismiss();
          console.log(this.grocery);
          //to calculate user's total price
          let total = 0;
          for(var i=0; i < this.grocery.length; i++){
             total += this.grocery[i].price;
             this.totalPrice = total;
           }
           return this.totalPrice;
          
        })
      }catch{

      }
      

    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }

  
  }

 
  RemoveGroceryList(rowID) {
    this.firebaseService.delete_grocery(rowID);
  }

  

  // shareWhatsapp() {
  //   this.socialSharing.shareViaWhatsApp(this.grocery)
  //     .then(() => {

  //     }).catch(() => {

  //     });
  // }

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


