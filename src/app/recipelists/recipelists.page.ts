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
      // this.loadingFunction('Loading...')
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
        // this.loaderDismiss();
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


EditRecipe(recipe) {
  recipe.isEdit = true;
  recipe.EditRecipeName = recipe.recipeName;
  recipe.EditCategory = recipe.category;
  recipe.EditIngredient = recipe.ingredient;
  recipe.EditSteps = recipe.steps;
  recipe.EditPrice = recipe.price;
}


UpdateRecord(recipeRow) {
  let recipe = {};
  recipe['recipeName'] = recipeRow.EditRecipeName;
  recipe['category'] = recipeRow.EditCategory;
  recipe['ingredient'] = recipeRow.EditIngredient;
  recipe['steps'] = recipeRow.EditSteps;
  recipe['price'] = recipeRow.EditPrice;
  this.firebaseService.update_User(recipeRow.id, recipe);
  recipeRow.isEdit = false;
}

RemoveRecipe(rowID) {
  this.firebaseService. delete_recipe(rowID);
}
}

