import { Injectable, NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import firebaseConfig from './firebase';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminpagePage } from './adminpage/adminpage.page';


@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

  Info;
  user;

  constructor(
    public firestore: AngularFirestore,
  ) { }


  create_NewUser(record) {
    return this.firestore.collection('users').add(record);
  }

  create_grocerylist(data) {
    return this.firestore.collection('grocerylist').add(data);
  }

  create_favourite(data) {
    return this.firestore.collection('favourite').add(data);
  }

  readGrocerylist(){
    return this.firestore.collection('grocerylist').snapshotChanges();
  }

  readFavourite(){
    return this.firestore.collection('favourite').snapshotChanges();
  }

  read_User() {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    var authID = user.uid;
    // this.Info = db.collection("users").where("authid", "==", authID)
    //   .get()
    //   .then(function (querySnapshot) {
    //     querySnapshot.forEach(function (doc) {
    //       console.log(doc.id, " => ", doc.data());
    //       let data = doc.data();
    //       return {
    //         id: doc.id,
    //         isEdit: false,
    //         gender: doc.data()['gender'],
    //         age: doc.data()['age'],
    //         weight: doc.data()['weight'],
    //         height: doc.data()['height'],
    //       }
         
    //     });

    //   })
    // return this.Info;
    // catch(function (error) {
    //   console.log("Error getting documents: ", error);
    // });
    return this.firestore.collection('users', ref => ref.where("authid", "==", authID)).snapshotChanges();
  }

  listUsers(){
    return this.firestore.collection('users').snapshotChanges();
  }

  update_User(userID, record) {
    this.firestore.doc('users/' + userID).update(record);
  }


  delete_userData(record_id) {
    this.firestore.doc('users/' + record_id).delete();  
    
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            console.log("LOG Out");
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return firebase.auth().currentUser;
  }
  // create_newRecipe(recipe) {
  //   return this.firestore.collection('recipeN').add(recipe);
  // }

  // listRecipe(){
  //   return this.firestore.collection('recipeN').snapshotChanges();
  // }

  // update_recipe(recipeID, recipe) {
  //   this.firestore.doc('recipeN/' + recipeID).update(recipe);
  // }

  // delete_recipe(recipe_id) {
  //   this.firestore.doc('recipeN/' + recipe_id).delete();
  // }

  create_location(location) {
    return this.firestore.collection('locationN').add(location);
  }

  read_location(){
    return this.firestore.collection('locationN').snapshotChanges();
  }

  update_location(locationID, location) {
    this.firestore.doc('locationN/' + locationID).update(location);
  }

  delete_location(location_id) {
    this.firestore.doc('locationN/' + location_id).delete();
  }

  delete_grocery(grocery_id) {
    this.firestore.doc('grocerylist/' + grocery_id).delete();
  }

  delete_favourite(fav_id) {
    this.firestore.doc('favourite/' + fav_id).delete();
  }


}
