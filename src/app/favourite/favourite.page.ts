import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/cart.service';
import { NavController, LoadingController } from '@ionic/angular';
import { FirebaseService } from 'app/firebase.service';
import { Idea } from 'app/services/idea.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  favourite;
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
    };

  constructor(private cartService: CartService, 
    private navCtrl: NavController,
    private firebaseService: FirebaseService,
    public loadingCtrl: LoadingController) { }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      // this.loadingFunction('Loading...')
      try{  
        // const items = this.cartService.getCart();

      // const selected = {};
      // for (const obj of items) {
      //   if (selected[obj.id]) {
      //     selected[obj.id].count++;
      //   } else {
      //     selected[obj.id] = { ...obj, count: 1 };
      //   }
      // }
      // this.selectedItems = Object.keys(selected).map(key => selected[key])
      // this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);

        this.firebaseService. readFavourite().subscribe(data =>{
          this.favourite = data.map(e => {
            return {
              id: e.payload.doc.id,
              isEdit: false,
              name: e.payload.doc.data()['name'],
              price: e.payload.doc.data()['category'],
              ingredients: e.payload.doc.data()['ingredients'],
              steps: e.payload.doc.data()['steps']
            };
         
          })   
        
          // this.loaderDismiss();
          console.log(this.favourite);
         
          
        })
      }catch{

      }
      
      

    } else {
      // No user is signed in.
      this.navCtrl.navigateBack('/login');
    }

  
  }

 
  RemoveFavourite(rowID) {
    this.firebaseService.delete_favourite(rowID);
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


