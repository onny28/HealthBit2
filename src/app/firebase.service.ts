import { Injectable, NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import firebaseConfig from './firebase';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})


export class FirebaseService {



  constructor(
    public firestore: AngularFirestore,
  ) { }


  create_NewUser(record) {
    return this.firestore.collection('users').add(record);
  }

  read_Users() {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    var authID = user.uid;
    db.collection("users").where("authid", "==", authID)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          let data = doc.data();
          return{
            gender : data.gender,
            age : data.age,
            weight : data.weight,
            height : data.height,
          }
         
          });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    // return this.firestore.collection('users').doc(`${this.id}`).get();
  }

  update_User(userID, record) {
    this.firestore.doc('users/' + userID).update(record);
  }


  delete_User(record_id) {
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

}
