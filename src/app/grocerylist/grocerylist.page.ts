import { Component, OnInit } from '@angular/core';

import { IdeaService } from 'app/services/idea.service';
import { CartService } from 'app/cart.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { NavController, LoadingController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.page.html',
  styleUrls: ['./grocerylist.page.scss'],
})
export class GrocerylistPage implements OnInit {

  text = 'check this out'
  url = 'https://'
  items;
  grocery;
  loader: HTMLIonLoadingElement;
  loading: boolean;

  selectedItems = [];
  total = 0;
  constructor(private cartService: CartService, 
    private socialSharing: SocialSharing,
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
        const items = this.cartService.getCart();
        
      const selected = {};
      for (const obj of items) {
        if (selected[obj.id]) {
          selected[obj.id].count++;
        } else {
          selected[obj.id] = { ...obj, count: 1 };
        }
      }
      this.selectedItems = Object.keys(selected).map(key => selected[key])
      this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);

        this.firebaseService. readGrocerylist().subscribe(data =>{
          this.grocery = data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              ingredient: e.payload.doc.data()['ingredient'],
             
            };
          })
          this.loaderDismiss();
          console.log(this.grocery);
        })
      }catch{

      }
      

    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }




  }


  shareWhatsapp() {
    this.socialSharing.shareViaWhatsApp(this.text, null, this.url)
      .then(() => {

      }).catch(() => {

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


