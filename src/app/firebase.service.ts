import { Injectable, NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


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

  create_calories(data) {
    return this.firestore.collection('calories').add(data);
  }

  read_calories() {
    var user = firebase.auth().currentUser;
    var authID = user.uid;
    return this.firestore.collection('calories', ref => ref.where("authid", "==", authID)).snapshotChanges();
  }

  delete_calories(data_id) {
    this.firestore.doc('calories/' + data_id).delete();
  }

  create_grocerylist(data) {
    return this.firestore.collection('grocerylist').add(data);
  }

  create_comment(data) {
    return this.firestore.collection('comment').add(data);
  }

  readComment(){
    var user = firebase.auth().currentUser;
    var authID = user.uid;
    return this.firestore.collection('comment', ref => ref.where("authid", "==", authID)).snapshotChanges();
  }

  readListComment(){
    return this.firestore.collection('comment').snapshotChanges();
  }

  delete_comment(comment_id) {
    this.firestore.doc('comment/' + comment_id).delete();
  }

  create_favourite(data) {
    return this.firestore.collection('favourite').add(data);
  }

  readGrocerylist(){
    var user = firebase.auth().currentUser;
    var authID = user.uid;
    return this.firestore.collection('grocerylist', ref => ref.where("authid", "==", authID)).snapshotChanges();
  }

  readFavourite(){
    return this.firestore.collection('favourite').snapshotChanges();
  }

  read_User() {
    var user = firebase.auth().currentUser;
    var authID = user.uid;
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
