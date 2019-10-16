import { Injectable } from '@angular/core';
import { Idea } from './services/idea.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';

 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  idea: Idea = {
    name: '',
    notes: '',
    steps:'',
    ingredients: [{
      name: '',
      price: undefined,
    }],
    calories: null,
    video: '',
    };

    private cart = [];
    private favourite = [];
    private caloriesitem = [];
    cartCount: number;
    

  constructor(public firestore: AngularFirestore,) {
   this.cartCount = 0;
  }
 
  //addtocart
  getIngredients(){
    return this.idea.ingredients;
  }

  addCart(ingredient) {
    this.cart.push(ingredient);
    // return this.firestore.collection('grocerylist').add(ingredient);
  }

  getCart(){
    return this.cart;
  }
  
  //adding calories to record
  addCalories(calories){
   this.caloriesitem.push(calories);
   
  }

  getCalories(){
    return this.idea.calories;
  }

  getCaloriesCart(){
    return this.caloriesitem;
  }

  //addtofavourite
  addToFavourite(idea){
    this.favourite.push(idea);
    return this.firestore.collection('favourite').add(idea);     
   }
 
   getFavourite(){
     return this.idea;
   }
 
   getFavCart(){
     return this.favourite;
   }

 
 
}
