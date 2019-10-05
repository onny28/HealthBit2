import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { NavController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-recipelists',
  templateUrl: './recipelists.page.html',
  styleUrls: ['./recipelists.page.scss'],
})
export class RecipelistsPage implements OnInit {

  recipeName: string;
  category: string;
  ingredient: Array<String>;
  steps: string;
  price: number;
  recipe: any;
  loader: HTMLIonLoadingElement;
  loading: boolean;

  constructor(
    private firebaseService: FirebaseService,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    var user = firebase.auth().currentUser;
    if (user) {
      // User is signed in.
      this.loadingFunction('Loading...')
      this.firebaseService.listRecipe().subscribe(data =>{
        this.recipe = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            recipeName: e.payload.doc.data()['recipeName'],
            category: e.payload.doc.data()['category'],
            ingredient: e.payload.doc.data()['ingredient'],
            steps: e.payload.doc.data()['steps'],
            price: e.payload.doc.data()['price'],
          };
        })
      });
        this.loaderDismiss();
        console.log(this.recipe);
      
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

async loaderDismiss(){
 this.loading = await this.loadingCtrl.dismiss();
}

CreateRecipe() {
  let recipe = {};
  recipe['recipeName'] = this.recipeName;
  recipe['category'] = this.category;
  recipe['ingredient'] = this.ingredient;
  recipe['steps'] = this.steps;
  recipe['price'] = this.price;
  this.firebaseService.create_newRecipe(recipe).then(resp => {
    this.recipeName = "";
    this.category = "";
    this.ingredient = [""];
    this.steps = "";
    this.price = undefined;
    console.log(resp);
    // this.navCtrl.navigateForward('/tabs/tabs/home')
  })
    .catch(error => {
      console.dir(error);
    });
}

EditRecipe(recipe) {
  record.isEdit = true;
  record.EditRole = record.role;
  record.EditGender = record.gender;
  record.EditAge = record.age;
  record.EditWeight = record.weight;
  record.EditHeight = record.height;
}


UpdateRecord(recordRow) {
  let record = {};
  record['role'] = recordRow.EditRole;
  record['gender'] = recordRow.EditGender;
  // record['dob'] = recordRow.EditDOB;
  record['age'] = recordRow.EditAge;
  record['weight'] = recordRow.EditWeight;
  record['height'] = recordRow.EditHeight;
  this.firebaseService.update_User(recordRow.id, record);
  recordRow.isEdit = false;
}
}

