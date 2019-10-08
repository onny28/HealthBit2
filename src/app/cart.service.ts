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
    }]
    };

    private cart = [];
    cartCount: number;
    

  constructor(public firestore: AngularFirestore,) {
   this.cartCount = 0;
  }
 
  getIngredients(){
    return this.idea.ingredients;
  }

  addCart(ingredient) {
    this.cart.push(ingredient);
    return this.firestore.collection('grocerylist').add(ingredient);
  }

  getCart(){
    return this.cart;
  }

 
}
